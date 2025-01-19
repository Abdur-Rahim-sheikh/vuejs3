<script>
import StoredResources from './components/resources/StoredResources.vue'
export default {
    components: {
        StoredResources,
    },
    data() {
        return {
            resources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official vue js documentations.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Your online friend',
                    link: 'https://google.com'
                },
            ]
        }
    }
}
</script>

<template>
    <StoredResources :resources="resources"></StoredResources>
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