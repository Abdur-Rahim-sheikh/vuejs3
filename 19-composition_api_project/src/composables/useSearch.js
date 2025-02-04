import { ref, computed, watch } from 'vue';

export default function useSearch(items, property) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');


    const availableItems = computed(() => {
        if (activeSearchTerm.value) {
            return items.value.filter((item) =>
                item[property].includes(activeSearchTerm.value)
            );
        }
        return items.value;
    });

    const updateSearch = (val) => {
        enteredSearchTerm.value = val;
    };

    watch(enteredSearchTerm, (val) => {
        setTimeout(() => {
            if (val === enteredSearchTerm.value) {
                activeSearchTerm.value = val;
            }
        }, 300);
    });

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch,
    };
}