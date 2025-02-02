const firebaseAuth = process.env.VUE_APP_FIREBASE_AUTH
const firebaseKey = process.env.VUE_APP_FIREBASE_KEY
let timer;
const getUrl = (authType) => {
    let type = authType === 'login' ? 'signInWithPassword' : 'signUp'
    return `${firebaseAuth}:${type}?key=${firebaseKey}`
}
export default {
    state() {
        return {
            userId: null,
            token: null,
            autoLoggedOut: false
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
        },
        autoLoggedOut(state) {
            return state.autoLoggedOut
        }
    },
    mutations: {
        setUser(state, payload) {
            state.userId = payload.userId
            state.token = payload.token
            state.autoLoggedOut = false
        },
        setAutoLoggedOut(state) {
            state.autoLoggedOut = true
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
            let expiresIn = +responseData.expiresIn * 1000;
            // let expiresIn = 5000;
            const expirationDate = new Date().getTime() + expiresIn;
            localStorage.setItem('userId', responseData.localId);
            localStorage.setItem('token', responseData.idToken);
            localStorage.setItem('tokenExpiration', expirationDate);

            timer = setTimeout(() => {
                context.dispatch('autoLogout')
            }, expiresIn)

            context.commit('setUser', {
                userId: responseData.localId,
                token: responseData.idToken,
            })
        },
        logout(context) {
            localStorage.removeItem('userId')
            localStorage.removeItem('token')
            localStorage.removeItem('tokenExpiration')
            clearTimeout(timer)

            context.commit('setUser', {
                userId: null,
                token: null,
            })
        },
        tryAutoLogin(context) {

            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');
            const tokenExpiration = localStorage.getItem('tokenExpiration');
            const expiresIn = +tokenExpiration - new Date().getTime();
            if (expiresIn < 0) {
                return;
            }
            timer = setTimeout(() => {
                context.dispatch('autoLogout')
            }, expiresIn)

            if (userId && token) {
                context.commit('setUser', {
                    userId: userId,
                    token: token,

                })
            }
        },
        autoLogout(context) {
            context.dispatch('logout')
            context.commit('setAutoLoggedOut')
        }
    }
}