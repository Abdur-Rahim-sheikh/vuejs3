import { createStore } from 'vuex'
import coaches from './coaches.js'
import requests from './requests.js'
export default createStore({

    modules: {
        coaches,
        requests
    },
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
})