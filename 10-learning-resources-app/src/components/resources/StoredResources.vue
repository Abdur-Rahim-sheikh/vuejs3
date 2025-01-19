<script>
import ResourceItem from './ResourceItem.vue'
export default {
    components: {
        ResourceItem,
    },
    inject: ['resources']
}
</script>

<template>
    <ul>
        <ResourceItem :resource="resource" v-for="resource in resources" :key="resource.id"></ResourceItem>
    </ul>
</template>

<style scoped>
ul {
    list-style: None;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>