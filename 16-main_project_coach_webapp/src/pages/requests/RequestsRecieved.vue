<script>
import { mapGetters } from 'vuex';
import RequestItem from '@/components/requests/RequestItem.vue';
export default {
    components: {
        RequestItem
    },
    computed: {
        ...mapGetters('requests', ['requests', 'hasRequests'])
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
        <ul v-if="hasRequests">
            <RequestItem v-for="request in requests" :key="request.id" :email="request.userEmail"
                :message="request.userMessage" />
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
    </section>
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