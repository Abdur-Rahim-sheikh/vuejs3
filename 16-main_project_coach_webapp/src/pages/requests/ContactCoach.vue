<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true
        }
    },
    methods: {
        sendMessage() {
            this.formIsValid = true;
            if (this.email === '' || !this.email.includes('@') || this.message === '') {
                this.formIsValid = false;
                return;
            }
            this.addRequest({
                email: this.email,
                message: this.message,
                coachId: this.$route.params.id
            });
            this.$router.replace({ name: 'coaches' });
        },
        ...mapActions('requests', ['addRequest'])
    }
}
</script>

<template>
    <form @submit.prevent="sendMessage">
        <div class="from-control">
            <label for="email">Your Email</label>
            <input v-model.trim="email" type="email" id="email">
        </div>
        <div class="from-control">
            <label for="message">Your Message</label>
            <textarea v-model.trim="message" id="message" rows="5"></textarea>
        </div>
        <p v-if="!formIsValid" class="errors">Please enter a valid email and a message!</p>
        <div class="actions">
            <BaseButton>Send</BaseButton>
        </div>
    </form>
</template>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}
</style>