<script>
import TheHeader from './components/layout/TheHeader.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        TheHeader
    },
    computed: {
        ...mapGetters(['autoLoggedOut'])
    },
    watch: {
        autoLoggedOut(currentValue) {
            if (currentValue) {
                this.$router.push({ name: 'auth' });
            }
        }
    },
    methods: {
        ...mapActions(['tryAutoLogin'])
    },
    created() {
        this.tryAutoLogin();
    }
}

</script>

<template>
    <TheHeader />
    <RouterView v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </RouterView>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}

.route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-enter-to,
.route-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}

.route-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>