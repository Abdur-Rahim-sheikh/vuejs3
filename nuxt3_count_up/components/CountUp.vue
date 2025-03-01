<script setup>
const props = defineProps(['value'])
const counter = useCountUp()
const lastValue = ref(props.value);
watch(() => props.value, (newValue, oldValue) => {
    counter.animate(newValue, oldValue)
    lastValue.value = newValue
})


const num = computed(() => counter.response.value)
onActivated(() => {
    counter.response.value = lastValue.value
})
</script>

<template>
    <transition name="slide" mode="out-in">
        <div :key="num">{{ num }}</div>
    </transition>
</template>

<style scoped>
.slide-enter-from {
    opacity: 0;
    transform: translateY(30%);
}

.slide-enter-active {
    transition: all 0.1s ease-out;
    font-weight: bold;
    background-color: lightgray;
}

.slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-leave-from {
    opacity: 1;
}

.slide-leave-active {
    transition: all 0.1s ease-in;
    font-weight: bold;
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-30%);
}
</style>