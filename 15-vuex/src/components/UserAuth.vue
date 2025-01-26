<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['logIn', 'logOut'])
    }
}
</script>

<template>
    <button @click="logIn">Login</button>
    <button @click="logOut">Logout</button>
</template>