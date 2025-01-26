export default {

    logIn(context) {
        context.commit('logIn', { value: true })
    },
    logOut(context) {
        context.commit('logIn', { value: false })
    }
}