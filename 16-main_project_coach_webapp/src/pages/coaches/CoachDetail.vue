<script>
import { mapGetters } from 'vuex';

export default {
    props: ['id'],
    data() {
        return {
            coach: null,
        }
    },
    computed: {
        fullName() {
            return `${this.coach.firstName} ${this.coach.lastName}`;
        },
        ...mapGetters('coaches', ['coaches']),
    },
    created() {
        this.coach = this.coaches.find(coach => coach.id === this.id);
    }
}
</script>

<template>
    <div>
        <section>
            <BaseCard>
                <h2>{{ fullName }}</h2>
                <h3>${{ coach.hourlyRate }}/ hour</h3>
            </BaseCard>
        </section>

        <section>
            <BaseCard>
                <header>
                    <h2>Interested? Reach out now!</h2>
                    <BaseButton link :to="{ name: 'coach-contact', params: { id: coach.id } }">
                        Contact Coach </BaseButton>
                </header>
                <RouterView></RouterView>
            </BaseCard>
        </section>

        <section>
            <BaseCard>
                <BaseBadge v-for="area in coach.areas" :title="area" :type="area" :key="area" />
                <p>{{ coach.description }}</p>
            </BaseCard>
        </section>
    </div>
</template>