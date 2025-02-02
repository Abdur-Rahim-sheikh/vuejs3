<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
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
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6) {
        this.formIsValid = false;
        return
      }
      const payload = {
        email: this.email,
        password: this.password,
        authType: this.mode
      }
      this.isLoading = true;
      try {
        await this.auth(payload);
        const redirect = this.$route.query.redirect || 'requests';
        console.log('redirect', redirect);
        this.$router.replace({ name: redirect });
      } catch (err) {
        this.error = err.message || 'Something went wrong!';
      }
      this.isLoading = false;

    },
    switchAuthMode() {
      this.mode = this.mode == 'login' ? 'signup' : 'login';

    },
    ...mapActions(['auth'])
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
    <BaseDialog :show="!!error" @close="error = null">{{ error }}</BaseDialog>
    <BaseDialog :show="isLoading" fixed title="Authenticating...">
      <BaseSpinner />
    </BaseDialog>
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