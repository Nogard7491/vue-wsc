'use strict';

export default {

    /**
     * Устанавливает плагин.
     *
     * @param {Vue} Vue основная библиотека
     * @param {string|Object} urlOrMultipleConnections URL-адрес для соединения или объект с множеством соединений
     * @param {undefined|string|string[]} protocols протоколы
     * @param {{}} options дополнительные опции
     */
    install: function (Vue, urlOrMultipleConnections, protocols, options) {

        /**
         * Идентификатор объекта для взаимодействия с веб-сокетами по умолчанию.
         *
         * @const {string}
         */
        const DEFAULT_WSC_ID = ['_', Math.random()].join();

        /**
         * Типы событий.
         *
         * @type {{onOpening: string, onOpen: string, onMessage: string, onClosing: string, onClose: string}}
         */
        const EVENT_TYPES = {
            onOpening: 'opening',
            onOpen: 'open',
            onMessage: 'message',
            onClosing: 'closing',
            onClose: 'close',
        };

        /**
         * Класс для создания
         *
         * @type {Wsc}
         */
        const Wsc = require('@nogard7491/wsc').default;

        /**
         * Контекст плагина.
         *
         * @type {default}
         * @private
         */
        const _root = this;

        /**
         * Хранилище соединений.
         *
         * @type {Object}
         * @private
         */
        const _wscRepository = {};

        /**
         * Хранилище событий.
         *
         * @type {Object}
         * @private
         */
        const _eventsRepository = {};

        /**
         * Заполняет хранилище объектов для взаимодействия с веб-сокетами.
         *
         * @param {string|Object} urlOrMultipleConnections URL-адрес для соединения или объект для мульти-подключения
         * @param {undefined|string|string[]} protocols протоколы
         * @param {{}} options дополнительные опции
         */
        this._fillWscRepository = function (urlOrMultipleConnections, protocols, options) {
            switch (typeof urlOrMultipleConnections) {
                case 'string':
                    _wscRepository[DEFAULT_WSC_ID] = new Wsc(
                        urlOrMultipleConnections,
                        protocols,
                        options
                    );
                    break;
                case 'object':
                    Object.keys(urlOrMultipleConnections).forEach(key => {
                        _wscRepository[key] = new Wsc(
                            urlOrMultipleConnections[key].url,
                            urlOrMultipleConnections[key].protocols,
                            urlOrMultipleConnections[key].options
                        );
                    });
                    break;
            }
        };

        /**
         * Получает объект для взаимодействия с веб-сокетами по идентификатору.
         *
         * @param {string} id идентификатор соединения
         */
        this._getWsc = function (id) {
            return _wscRepository[id] || _wscRepository[DEFAULT_WSC_ID];
        };

        this._fillWscRepository(urlOrMultipleConnections, protocols, options);

        Vue.mixin({

            /**
             * Обработчик события создания экземпляра.
             */
            created: function () {

                if (this.$options.wsc) {

                    let wsc;
                    let eventId;

                    _eventsRepository[this._uid] = {};
                    Object.keys(this.$options.wsc).forEach(key => {
                        switch (typeof this.$options.wsc[key]) {
                            case 'function':
                                if (EVENT_TYPES[key]) {
                                    if (typeof _eventsRepository[this._uid][DEFAULT_WSC_ID] === 'undefined') {
                                        _eventsRepository[this._uid][DEFAULT_WSC_ID] = [];
                                    }
                                    wsc = _root._getWsc(DEFAULT_WSC_ID);
                                    eventId = wsc.on(EVENT_TYPES[key], this.$options.wsc[key].bind(this));
                                    _eventsRepository[this._uid][DEFAULT_WSC_ID].push(eventId);
                                }
                                break;
                            case 'object':
                                wsc = _root._getWsc(key);
                                if (typeof _eventsRepository[this._uid][key] === 'undefined') {
                                    _eventsRepository[this._uid][key] = [];
                                }
                                Object.keys(this.$options.wsc[key]).forEach(innerKey => {
                                    if (EVENT_TYPES[innerKey]) {
                                        eventId = wsc.on(EVENT_TYPES[innerKey], this.$options.wsc[key][innerKey].bind(this));
                                        _eventsRepository[this._uid][key].push(eventId);
                                    }
                                });
                                break;
                        }
                    });
                }
            },

            /**
             * Обработчик события начала уничтожения экземпляра.
             */
            beforeDestroy() {

                if (_eventsRepository[this._uid]) {

                    let wsc;
                    Object.keys(_eventsRepository[this._uid]).forEach(key => {
                        wsc = _root._getWsc(key);
                        _eventsRepository[this._uid][key].forEach(eventId => {
                            wsc.off(eventId);
                        })
                    });

                    delete _eventsRepository[this._uid];
                }
            }
        });

        Vue.prototype.$wsc = function (id) {

            const wsc = _root._getWsc(id);

            if (typeof wsc === 'undefined') {
                throw new Error('WebSocket instance is not defined');
            }

            return {
                connect() {
                    wsc.connect();
                },
                send(data) {
                    wsc.send(data);
                },
                close(code = 1000, reason) {
                    wsc.close(code, reason);
                }
            }
        }
    }
};