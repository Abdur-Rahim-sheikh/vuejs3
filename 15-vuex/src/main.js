import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0,
            loggedIn: false
        }
    },
    mutations: {
        increment(state) {
            state.counter += 2

        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
        logIn(state, payload) {
            state.logIn = payload.value
        }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 2000)

        },
        increase(context, payload) {
            context.commit('increase', payload)
        },
        logIn(context) {
            context.commit('logIn', { value: true })
        },
        logOut(context) {
            context.commit('logIn', { value: false })
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            if (getters.finalCounter < 0) {
                return 0
            }
            else if (getters.finalCounter > 100) {
                return 100
            }
            return getters.finalCounter
        },
        loginStatus(state) {
            return state.logIn
        }
    }
});
const app = createApp(App);

app.use(store);
app.mount('#app');
