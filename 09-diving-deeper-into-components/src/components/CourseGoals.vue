<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'learn vue']
        }
    }
}

</script>

<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anotherValue="ulala" />
        </li>
    </ul>
</template>