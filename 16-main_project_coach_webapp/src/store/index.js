import { createStore } from 'vuex'
import coaches from './coaches.js'
import requests from './requests.js'
import auth from './auth.js'
export default createStore({

    modules: {
        coaches,
        requests,
        auth
    },
})