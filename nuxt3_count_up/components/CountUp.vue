<script setup>
const props = defineProps(['value'])
const current = ref(props.value);
watch(() => props.value, (newValue, oldValue) => {
    const { animatedValue } = useCountUp(newValue, oldValue)
    current.value = animatedValue
}, { immediate: true })

</script>

<template>
    <transition name="slide" mode="out-in">
        <div :key="current">{{ current }}</div>
    </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: opacity 0.5s, font-weight 0.5s ease-in-out;
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