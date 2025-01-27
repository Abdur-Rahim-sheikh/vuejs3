import { createStore } from 'vuex'
import cart from './cart.js'
import products from './products.js'

const store = createStore({
    modules: {
        cart,
        products
    },
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