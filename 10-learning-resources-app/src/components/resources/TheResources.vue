<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue'

export default {

    components: {
        StoredResources,
        AddResources,
    },

    data() {
        return {
            selectedResources: 'StoredResources',
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
    },

    methods: {
        changeResource(elementName) {
            this.selectedResources = elementName
        }
    },
    provide() {
        return {
            resources: this.resources
        }
    }

}
</script>

<template>
    <BaseCard>
        <BaseButton @click="changeResource('StoredResources')">Stored Resources</BaseButton>
        <BaseButton @click="changeResource('AddResources')">Add Resources</BaseButton>
    </BaseCard>
    <component :is="selectedResources"></component>


</template>