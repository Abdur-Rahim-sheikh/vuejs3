<script>
import ResourceItem from './components/resources/ResouceItem.vue'
export default {
    components: {
        ResourceItem,
    },
    data() {
        return {
            storedResources: [
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
    <ul>
        <ResourceItem :resource="resource" v-for="resource in storedResources" :key="resource.id"></ResourceItem>
    </ul>
</template>