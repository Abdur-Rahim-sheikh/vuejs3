import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js'
const store = createStore({
    modules: {
        counterModule, // or this could be var1: counterModule and work same
    },
    state() {
        return {
            loggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

export default store;