<script>
import { mapGetters } from 'vuex'
export default {
    emits: ['updateFilter'],
    data() {
        return {
            chosenBadges: null
        }
    },
    computed: {
        ...mapGetters('coaches', ['availableBadges'])
    },
    methods: {
        filter(event) {
            const id = event.target.id;
            const checked = event.target.checked;
            this.chosenBadges[id] = checked;
            this.$emit('updateFilter', this.chosenBadges);
        }
    },
    created() {
        this.chosenBadges = Object.fromEntries(this.availableBadges.map(badge => [badge, true]));
        this.$emit('updateFilter', this.chosenBadges);
    }
}
</script>

<template>

    <BaseCard>
        <h2>Find your Coach</h2>
        <span class="filter-option" v-for="badge in availableBadges" :key="badge">
            <input type="checkbox" :id="badge" :value="badge" checked @change="filter" />
            <label :for="badge">{{ badge }}</label>
        </span>
    </BaseCard>

</template>


<style scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>