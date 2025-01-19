<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            invalidInput: false
        }
    },
    methods: {
        setGoals() {
            let value = this.$refs.goal.value;
            if (value === '') {
                // alert('Input must not be empty')
                this.invalidInput = true;
            }
        },
        confirmError() {
            this.invalidInput = false;
        }
    }
}
</script>

<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal">
        <button @click="setGoals">Set Goal</button>
        <Teleport to="body">
            <ErrorAlert v-if="invalidInput">
                <h2>Input Is invalid!</h2>
                <p>Please enter at least one character</p>
                <button @click="confirmError">Okay</button>
            </ErrorAlert>
        </Teleport>
    </div>

</template>

<style scoped>
div {
    padding: 2x;
    padding-left: 2x;
}
</style>