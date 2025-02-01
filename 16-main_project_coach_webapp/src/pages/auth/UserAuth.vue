<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    }

  },
  computed: {
    submitButtonCaption() {
      return this.mode == 'login' ? 'Login' : 'Signup'
    },
    switchModeButtonCaption() {
      return this.mode == 'login' ? 'Signup instead' : 'Login instead'
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6) {
        this.formIsValid = false;
        return
      }
      if (this.mode === 'login') {
        this.login({ email: this.email, password: this.password });
      } else {
        this.signup({ email: this.email, password: this.password });
      }
    },
    switchAuthMode() {
      this.mode = this.mode == 'login' ? 'signup' : 'login';

    },
    ...mapActions(['login', 'signup'])
  }
}
</script>

<template>
  <BaseCard>
    <form @submit.prevent="submitForm">

      <div class="form-control">
        <label for="email">Email</label>
        <input type="text" id="email" v-model.trim="email">
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password">
      </div>
      <p v-if="!formIsValid">Please enter a valid email and password(>=6 characters)</p>
      <BaseButton>{{ submitButtonCaption }}</BaseButton>
      <BaseButton mode="flat" @click.prevent="switchAuthMode">{{ switchModeButtonCaption }}</BaseButton>

    </form>
  </BaseCard>
</template>

<style scoped>
form {
  margin: 1rem;

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
</style>