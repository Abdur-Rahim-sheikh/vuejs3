import { createStore } from 'vuex'
import coaches from './coaches.js'
export default createStore({

    modules: {
        coaches
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