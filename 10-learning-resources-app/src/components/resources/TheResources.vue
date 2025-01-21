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
        },
        removeResource(resourceId) {
            // below code creates new array and assigns it to resources
            // that's why it does not work
            // this.resources = this.resources.filter(resource => resource.id !== resourceId)

            // so we need to keep the reference of the original array
            let idx = this.resources.findIndex(resource => resource.id === resourceId)
            this.resources.splice(idx, 1)
            console.log(this.resources.length)
        }
    },
    provide() {
        return {
            resources: this.resources,
            addResource: this.addResource,
            removeResource: this.removeResource
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