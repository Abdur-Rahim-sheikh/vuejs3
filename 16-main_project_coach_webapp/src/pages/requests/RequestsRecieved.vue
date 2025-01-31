<script>
import { mapGetters, mapActions } from 'vuex';
import RequestItem from '@/components/requests/RequestItem.vue';
export default {
    components: {
        RequestItem
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    computed: {
        ...mapGetters('requests', ['requests', 'hasRequests']),
    },
    methods: {
        ...mapActions('requests', ['loadRequests']),
    },
    async created() {
        this.isLoading = true;
        try {
            await this.loadRequests();
        } catch (error) {
            this.error = error.message || 'Failed to load requests';
        }
        this.isLoading = false;
    }
}
</script>

<template>
    <section>
        <BaseCard>
            <header>
                <h2>Requests Received</h2>
            </header>
        </BaseCard>
        <ul v-if="isLoading">
            <BaseSpinner />
        </ul>
        <ul v-else-if="hasRequests">
            <RequestItem v-for="request in requests" :key="request.id" :email="request.userEmail"
                :message="request.userMessage" />
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
    </section>
    <BaseDialog :show="!!error" @close="error = null">
        <p>{{ error }}</p>
    </BaseDialog>
</template>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>