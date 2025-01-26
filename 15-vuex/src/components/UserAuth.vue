<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        ...mapActions(['logIn', 'logOut'])
    }
}
</script>

<template>
    <button v-if="!isAuthenticated" @click="logIn">Login</button>
    <button v-else @click="logOut">Logout</button>
</template>