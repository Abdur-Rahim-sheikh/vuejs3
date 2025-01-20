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
    computed: {
        storedResButtonMode() {
            return this.selectedResources === 'StoredResources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedResources === 'AddResources' ? null : 'flat'
        }

    },

    methods: {
        changeResource(elementName) {
            this.selectedResources = elementName
        },
        addResource(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: url
            }
            this.resources.unshift(newResource);
            this.selectedResources = 'StoredResources'
        }
    },
    provide() {
        return {
            resources: this.resources,
            addResource: this.addResource
        }
    }

}
</script>

<template>
    <BaseCard>
        <BaseButton @click="changeResource('StoredResources')" :mode="storedResButtonMode">Stored
            Resources</BaseButton>
        <BaseButton @click="changeResource('AddResources')" :mode="addResButtonMode">Add Resources</BaseButton>
    </BaseCard>

    <KeepAlive>
        <component :is="selectedResources"></component>
    </KeepAlive>

</template>