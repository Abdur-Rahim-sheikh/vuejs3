<script setup>
const props = defineProps(['value'])
const counter = useCountUp()
const current = ref(props.value);
const lastValue = ref(props.value);
watch(() => props.value, (newValue, oldValue) => {
    counter.animate(newValue, oldValue)
    current.value = counter.animatedValue
    lastValue.value = newValue
})

onActivated(() => {
    current.value = lastValue.value
})
</script>

<template>
    <transition name="slide" mode="out-in">
        <div :key="current">{{ current }}</div>
    </transition>
</template>

<style scoped>
.slide-enter-active {
    transition: all 0.5s ease-out;
    font-weight: bold;
}

.slide-leave-active {
    transition: all 0.5s ease-in;
    font-weight: bold;
}

.slide-enter {
    opacity: 0;
    transform: translateY(30%);
}

.slide-leave-to {
    opacity: 0;
    transform: translateY(-30%);
}
</style>