<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment')
        // }
        ...mapActions(['increment'])
    }
}
</script>

<template>

    <button @click="increment">Add Change</button>
</template>