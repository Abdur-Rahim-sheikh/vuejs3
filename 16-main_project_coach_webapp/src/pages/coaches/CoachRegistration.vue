<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import { mapActions } from 'vuex';

export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(coachData) {
            this.registerCoach(coachData);

            this.$router.replace({ name: 'coaches' });
        },
        ...mapActions('coaches', ['registerCoach'])
    }
}
</script>

<template>
    <section>
        <BaseCard>
            <h2>Register as a coach now</h2>
            <CoachForm @onSave="saveData" />
        </BaseCard>
    </section>
</template>