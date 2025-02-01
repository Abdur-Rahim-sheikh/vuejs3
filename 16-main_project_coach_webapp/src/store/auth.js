const firebaseSignup = process.env.VUE_APP_FIREBASE_SIGNUP_AUTH
export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    },
    mutations: {
        setUser(state, payload) {
            state.userId = payload.userId
            state.token = payload.token
            state.tokenExpiration = payload.tokenExpiration
        }
    },
    actions: {
        login() { },
        async signup(context, payload) {
            const response = await fetch(firebaseSignup, {
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
            const responseData = await response.json();
            if (!response.ok) {
                console.log(responseData)
                const error = new Error(responseData.message || 'Failed to authenticate. Check your login data.')
                throw error
            }
            console.log(responseData)
            context.commit('setUser', {
                userId: responseData.localId,
                token: responseData.idToken,
                tokenExpiration: responseData.expiresIn
            })
        }
    }
}