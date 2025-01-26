import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        authenticate(state, value) {
            state.isLoggedIn = value
        }
    },
    actions: {
        login(context) {
            context.commit('authenticate', true)
        },
        logout(context) {
            context.commit('authenticate', false)
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
        }
    }
})

export default store;