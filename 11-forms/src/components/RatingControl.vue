<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         rating: this.modelValue
    //     }
    // },
    // computed: {
    //     rating() {
    //         return this.modelValue;
    //     }
    // },
    methods: {
        setRating(value) {
            this.$emit('update:modelValue', value);
        }
    }
}
</script>

<template>

    <ul>
        <li :class="{ active: modelValue === 'poor' }"><button type="button" @click="setRating('poor')">Poor</button>
        </li>
        <li :class="{ active: modelValue === 'average' }"><button type="button"
                @click="setRating('average')">Average</button></li>
        <li :class="{ active: modelValue === 'great' }"><button type="button" @click="setRating('great')">Great</button>
        </li>
    </ul>

</template>

<style scoped>
.active {
    border-color: #0f2672;
}

.active button {
    color: #0f2672;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>