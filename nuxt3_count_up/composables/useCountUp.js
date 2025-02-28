export default function useCountUp(next, prev = null, duration = 1000) {
    let animatedValue = ref(prev || 0);

    const animate = (from, to) => {
        const startTime = performance.now();

        const update = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = elapsedTime / duration;

            animatedValue.value = Math.floor(from + progress * (to - from));

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                animatedValue.value = to;
            }
        };
        requestAnimationFrame(update);
    };
    animate(animatedValue.value, next);

    return { animatedValue };
}