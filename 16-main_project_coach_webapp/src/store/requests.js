const firebaseUrl = process.env.VUE_APP_FIREBASE_URL;

export default {
    namespaced: true,
    state() {
        return {
            requests: [],
        }
    },
    mutations: {
        addRequest(state, request) {
            state.requests.push(request);
        }
    },
    actions: {
        async addRequest(context, request) {

            const data = {
                userEmail: request.email,
                userMessage: request.message,
            }
            let url = `${firebaseUrl}/requests/${request.coachId}.json`;
            let response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data)
            });
            let responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to send request.');
                throw error;
            }
            context.commit('addRequest', data);
        },
        async loadRequests(context) {
            const coachId = context.rootGetters.userId;
            const token = context.rootGetters.userToken;
            let url = `${firebaseUrl}/requests/${coachId}.json?auth=${token}`;
            let response = await fetch(url);
            let responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch requests.');
                throw error;
            }
            const requests = [];
            for (const key in responseData) {
                const request = {
                    id: key,
                    userEmail: responseData[key].userEmail,
                    userMessage: responseData[key].userMessage,
                };
                requests.push(request);
            }
            context.state.requests = requests
        },
    },
    getters: {
        requests(state,) {
            return state.requests
        },
        hasRequests(_, getters) {
            return getters.requests.length > 0;
        }
    }
}