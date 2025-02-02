const firebaseAuth = process.env.VUE_APP_FIREBASE_AUTH
const firebaseKey = process.env.VUE_APP_FIREBASE_KEY

const getUrl = (authType) => {
    let type = authType === 'login' ? 'signInWithPassword' : 'signUp'
    return `${firebaseAuth}:${type}?key=${firebaseKey}`
}
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
        },
        userToken(state) {
            return state.token
        },
        isAuthenticated(state) {
            return !!state.token
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
        async auth(context, payload) {
            let url = null;
            payload.authType = payload.authType.toLowerCase()
            if (payload.authType === 'login') {
                url = getUrl('login')
            }
            else if (payload.authType === 'signup') {
                url = getUrl('signup')
            } else {
                throw new Error('Invalid auth type: either login or signup')
            }
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true
                })
            })
            const responseData = await response.json();
            if (!response.ok) {
                console.log(responseData)
                const error = new Error(responseData.error.message || 'Failed to authenticate. Check your authentication data.')
                throw error
            }

            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('token', responseData.idToken);

            context.commit('setUser', {
                userId: responseData.localId,
                token: responseData.idToken,
                tokenExpiration: responseData.expiresIn
            })
        },
        logout(context) {
            context.commit('setUser', {
                userId: null,
                token: null,
                tokenExpiration: null
            })
        },
        tryAutoLogin(context) {

            const userId = localStorage.getItem('userId')
            const token = localStorage.getItem('token')
            if (userId && token) {
                context.commit('setUser', {
                    userId: userId,
                    token: token,
                    tokenExpiration: null
                })
            }
        }
    }
}