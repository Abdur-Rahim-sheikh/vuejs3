<script>
import { computed } from 'vue';
export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props, context) {
        const userName = computed(() => {
            return `${props.firstName} ${props.lastName}`;
        });
        console.log(context)
        return { userName };
    },
}
</script>
<template>

    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>