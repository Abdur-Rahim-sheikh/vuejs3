import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
const counterModule = {
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            state.counter += 2

        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
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
    }
}
const store = createStore({
    modules: {
        counterModule, // or this could be var1: counterModule and work same
    },
    state() {
        return {
            loggedIn: false
        }
    },
    mutations: {

        logIn(state, payload) {
            state.logIn = payload.value
        }
    },
    actions: {

        logIn(context) {
            context.commit('logIn', { value: true })
        },
        logOut(context) {
            context.commit('logIn', { value: false })
        }
    },
    getters: {

        isAuthenticated(state) {
            return state.logIn
        }
    }
});
const app = createApp(App);

app.use(store);
app.mount('#app');
