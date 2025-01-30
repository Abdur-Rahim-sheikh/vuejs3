<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            activeFilters: null,
        }
    },
    computed: {
        ...mapGetters('coaches', ['coaches', 'hasCoaches', 'availableBadges', 'isCoach']),
        filteredCoaches() {
            return this.coaches.filter(coach => {
                return coach.areas.some(area => this.activeFilters[area]);
            })
        },
    },
    methods: {
        filterBadges(selectedBadges) {
            this.activeFilters = selectedBadges;
        },
    },
    created() {
        this.activeFilters = Object.fromEntries(this.availableBadges.map(badge => [badge, true]));
    }

}
</script>

<template>
    <section>
        <CoachFilter @updateFilter="filterBadges" />
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline">Refresh</BaseButton>
                <BaseButton v-if="!isCoach" to="/register" link>Register as Coach</BaseButton>
            </div>
            <ul v-if="hasCoaches">
                <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach" />
            </ul>
            <p v-else>No coaches found</p>
        </BaseCard>
    </section>
</template>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>