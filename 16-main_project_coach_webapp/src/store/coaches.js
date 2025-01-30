const firebaseUrl = process.env.VUE_APP_FIREBASE_URL
export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ],
            badges: ['frontend', 'backend', 'career']
        }

    },
    mutations: {
        badgeExist(state, badge) {
            return state.badges.includes(badge.toLowerCase())
        },
        registerCoach(state, payload) {
            state.coaches.push(payload)
        },
        setCoaches(state, payload) {
            state.coaches = payload
        }
    },
    actions: {
        badgeExist(context, badge) {
            return context.commit('badgeExist', badge)
        },
        async registerCoach(context, payload) {
            const userId = context.rootGetters.userId
            const coachData = {
                firstName: payload.firstname,
                lastName: payload.lastname,
                areas: payload.areas,
                description: payload.description,
                hourlyRate: payload.rate
            }
            let url = `${firebaseUrl}/coaches/${userId}.json`
            console.log(url)
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(coachData)
            });
            const responseData = await response.json();
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to register.')
                throw error
            }
            context.commit('registerCoach', {
                ...coachData,
                id: userId
            })
        },
        async loadCoaches(context) {
            const response = await fetch(`${firebaseUrl}/coaches.json`)
            const responseData = await response.json()
            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch.')
                throw error
            }
            const coaches = []
            for (const key in responseData) {
                const coach = {
                    id: key,
                    firstName: responseData[key].firstName,
                    lastName: responseData[key].lastName,
                    areas: responseData[key].areas,
                    description: responseData[key].description,
                    hourlyRate: responseData[key].hourlyRate
                }
                coaches.push(coach)
            }
            context.commit('setCoaches', coaches)
        }
    },
    getters: {
        coaches(state) {
            return state.coaches
        },
        hasCoaches(state) {
            return state.coaches.length > 0
        },
        availableBadges(state) {
            return state.badges
        },
        isCoach(_, getters, _2, rootGetters) {
            const coaches = getters.coaches
            const userId = rootGetters.userId
            return coaches.some(coach => coach.id === userId)
        }
    }
}
