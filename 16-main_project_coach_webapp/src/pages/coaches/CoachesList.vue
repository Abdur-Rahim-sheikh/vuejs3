<script>
import { mapGetters, mapActions } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
    components: {
        CoachItem,
        CoachFilter,
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: null,
        }
    },
    computed: {
        ...mapGetters('coaches', ['coaches', 'hasCoaches', 'availableBadges', 'isCoach']),
        ...mapGetters(['isAuthenticated']),
        filteredCoaches() {
            return this.coaches.filter(coach => {
                return coach.areas.some(area => this.activeFilters[area]);
            })
        },
        canRegister() {
            return this.isAuthenticated && !this.isCoach && !this.isLoading;
        }
    },
    methods: {
        filterBadges(selectedBadges) {
            this.activeFilters = selectedBadges;
        },
        async reloadCoaches(forceRefresh = false) {
            this.isLoading = true;
            try {
                await this.loadCoaches(forceRefresh);
            } catch (error) {
                this.error = error.message || 'Failed to load coaches';
            }

            this.isLoading = false;

        },
        ...mapActions('coaches', ['loadCoaches']),
    },
    async created() {
        await this.reloadCoaches();
        this.activeFilters = Object.fromEntries(this.availableBadges.map(badge => [badge, true]));
        console.log('isAuthenticated', this.isAuthenticated);
    }

}
</script>

<template>
    <div>
        <section>
            <CoachFilter @updateFilter="filterBadges" />
        </section>
        <section>
            <BaseCard>
                <div class="controls">
                    <BaseButton mode="outline" @click="reloadCoaches(foreRefresh = true)">Refresh</BaseButton>
                    <BaseButton v-if="!isAuthenticated" link
                        :to="{ name: 'auth', query: { redirect: 'register-coach' } }">
                        Login
                        to Register as a Coach
                    </BaseButton>
                    <BaseButton v-if="canRegister" to="/register" link>Register as Coach</BaseButton>
                </div>
                <div v-if="isLoading">
                    <BaseSpinner />
                </div>
                <ul v-else-if="hasCoaches">
                    <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :coach="coach" />
                </ul>
                <p v-else>No coaches found</p>
            </BaseCard>
        </section>
        <BaseDialog :show="!!error" @close="error = null" title="An error occurred">
            <p>{{ error }}</p>
        </BaseDialog>
    </div>
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