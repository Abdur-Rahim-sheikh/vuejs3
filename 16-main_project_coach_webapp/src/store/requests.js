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
        addRequest(context, request) {
            const data = {
                id: new Date().toISOString(),
                coachId: request.coachId,
                userEmail: request.email,
                userMessage: request.message,
            }
            context.commit('addRequest', data);
        }
    },
    getters: {
        requests(state) {
            return state.requests;
        },
        hasRequests(state) {
            return state.requests.length > 0;
        }
    }
}