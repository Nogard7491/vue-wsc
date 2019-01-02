# Web Socket Client for Vue.js (vue-wsc)

Wsc is simple to use, blazing fast and thoroughly tested websocket client.

## Table of contents

- [Installing](#installing)
- [Requiring](#requiring)
  - [Via tag "script"](#via-tag-script)
  - [Via Node.js require](#via-nodejs-require)
  - [Via ES6 import](#via-es6-import)
- [Usage examples](#usage-examples)
  - [Simple usage](#simple-usage)
  - [Using multiple connections](#using-multiple-connections)
- [Changelog](#changelog)
- [License](#license)

## Installing

```
npm install @nogard7491/vue-wsc --save
```

## Requiring

### Via tag "script"

```
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="./node_modules/@nogard7491/vue-wsc/dist/vue-wsc-1.0.0.min.js"></script>
<script>
    Vue.use(VueWsc.default, 'ws://echo.websocket.org', undefined, {
        useMessageQueue: true,
        reconnection: true,
        reconnectionOptions: {
            attempts: Infinity,
            delay: 1000,
            maxDelay: 10000,
            increaseDelay: 1000,
        }
    });
</script>
```

### Via Node.js require

```
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script>
    const VueWsc = require('@nogard7491/vue-wsc').default;

    Vue.use(VueWsc, {
        main: {
            url: 'ws://echo.websocket.org',
            protocols: undefined,
            options: {
                useMessageQueue: true,
                reconnection: true,
                reconnectionOptions: {
                    attempts: Infinity,
                    delay: 1000,
                    maxDelay: 10000,
                    increaseDelay: 1000,
                }
            }
        },
        chat: {
            url: 'ws://echo.websocket.org',
            protocols: undefined,
            options: {
                useMessageQueue: true,
                reconnection: true,
                reconnectionOptions: {
                    attempts: 10,
                    delay: 1000,
                    maxDelay: 1000,
                    increaseDelay: 0,
                }
            }
        },
    });
</script>
```

### Via ES6 import

```
<script src="./node_modules/vue/dist/vue.min.js"></script>
<script>
    import VueWsc from '@nogard7491/vue-wsc';

    Vue.use(VueWsc, {
        common: {
            url: 'ws://echo.websocket.org',
            protocols: undefined,
            options: {
                useMessageQueue: true,
                reconnection: true,
                reconnectionOptions: {
                    attempts: Infinity,
                    delay: 1000,
                    maxDelay: 10000,
                    increaseDelay: 1000,
                }
            }
        },
    });
</script>
```

## Usage examples

### Simple usage

```js
Vue.use(VueWsc.default, 'ws://echo.websocket.org', undefined, {
    useMessageQueue: true,
    reconnection: true,
    reconnectionOptions: {
        attempts: Infinity,
        delay: 1000,
        maxDelay: 10000,
        increaseDelay: 1000,
    }
});

/** @type {Vue} vm Основное приложение. */
const vm = new Vue({
    wsc: {
        onOpening() {
            console.log('onOpening');
        },
        onOpen(event) {
            console.log('onOpen', event);
        },
        onMessage(event) {
            console.log('onMessage', event);
        },
        onClosing() {
            console.log('onClosing');
        },
        onClose(event) {
            console.log('onClose');
        }
    },
    data: () => {
        return {

        }
    },
    created() {
        this.$wsc().connect();
    }
});

vm.$mount('#app');
```

### Using multiple connections

```js
Vue.use(VueWsc.default, {
    main: {
        url: 'ws://echo.websocket.org',
        protocols: undefined,
        options: {
            useMessageQueue: true,
            reconnection: true,
            reconnectionOptions: {
                attempts: Infinity,
                delay: 1000,
                maxDelay: 10000,
                increaseDelay: 1000,
            }
        }
    },
    chat: {
        url: 'ws://echo.websocket.org',
        protocols: undefined,
        options: {
            useMessageQueue: true,
            reconnection: true,
            reconnectionOptions: {
                attempts: 10,
                delay: 1000,
                maxDelay: 1000,
                increaseDelay: 0,
            }
        }
    },
});

/** @type {Vue} vm Основное приложение. */
const vm = new Vue({
    wsc: {
        main: {
            onOpening() {
                console.log('main onOpening');
            },
            onOpen(event) {
                console.log('main onOpen', event);
                this.$wsc('main').send('some message for main');
            },
            onMessage(event) {
                console.log('main onMessage', event);
                this.echoMainList.push(event.data);
            },
            onClosing() {
                console.log('main onClosing');
            },
            onClose(event) {
                console.log('main onClose');
            }
        },
        chat: {
            onOpening() {
                console.log('chat onOpening');
            },
            onOpen(event) {
                console.log('chat onOpen', event);
                this.$wsc('chat').send('some message for chat');
            },
            onMessage(event) {
                console.log('chat onMessage', event);
                this.echoChatList.push(event.data);
            },
            onClosing() {
                console.log('chat onClosing');
            },
            onClose(event) {
                console.log('chat onClose');
            }
        }
    },
    data: () => {
        return {
            echoMainList: [],
            echoChatList: [],
        }
    },
    created() {
        this.$wsc('main').connect();
        this.$wsc('chat').connect();
    }
});

vm.$mount('#app');
```

## Changelog

### [v1.0.0 (2018-11-25)](https://github.com/Nogard7491/vue-wsc/releases/tag/v1.0.0)

## License

[MIT](LICENSE.md)