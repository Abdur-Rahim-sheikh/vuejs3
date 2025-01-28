<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
    components: {
        CoachItem,
    },
    computed: {
        ...mapGetters('coaches', ['coaches', 'hasCoaches']),
    },

}
</script>

<template>
    <section>FILTER</section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <RouterLink to="/register">Register as Coach</RouterLink>
        </div>
        <ul v-if="hasCoaches">
            <CoachItem v-for="coach in coaches" :key="coach.id" :coach="coach" />
        </ul>
        <p v-else>No coaches found</p>
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