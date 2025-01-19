<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/resources/TheResources.vue'
export default {
    components: {

        TheHeader,
        TheResources,
    },

}
</script>

<template>
    <TheHeader title="remember me" />
    <TheResources />
    <!-- <StoredResources :resources="resources"></StoredResources> -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>