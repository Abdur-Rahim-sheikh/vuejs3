export default function useCountUp(duration = 1000) {
    let animatedValue = ref(0);

    const animate = (to, from = null) => {
        from = from || 0;
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
    // catch the response inside a computed 
    // if we want to apply transition to it
    return { response: animatedValue, animate };
}