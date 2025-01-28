<script>
export default {
    props: {
        coach: {
            type: Object,
            required: true,
        }
    },
    computed: {
        fullName() {
            return `${this.coach.firstName} ${this.coach.lastName}`;
        },
    }
}
</script>

<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ coach.hourlyRate }}/hour</h4>
        <div>
            <BaseBadge v-for="area in coach.areas" :key="area" :title="area" :type="area" />
        </div>
        <div class="actions">
            <BaseButton link mode="outline" :to="{ name: 'coach-contact', params: { id: coach.id } }">
                Contact
            </BaseButton>

            <BaseButton link :to="{ name: 'coach-detail', params: { id: coach.id } }">
                View Details
            </BaseButton>
        </div>
    </li>
</template>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
}

h3 {
    font-size: 1.5rem;
}

h3,
h4 {
    margin: 0.5rem 0;
}

div {
    margin: 0.5rem 0;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
</style>