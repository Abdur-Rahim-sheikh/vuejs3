<script>
export default {
  data() {
    return {
      username: '',
      userAge: null,
      referrer: 'wom',
      interests: [],
      how: null,
      confirm: false,
      validateUsername: 'pending'
    }
  },
  methods: {
    submitForm() {
      console.log('referrer:', this.referrer)
      console.log('interests:', this.interests)
      console.log('how:', this.how)
      console.log('confirm:', this.confirm)
      this.username = ''
      this.referrer = 'wom'
      this.interests = []
      this.how = null
      this.confirm = false
    },
    validate() {

      if (!this.username) {
        this.validateUsername = 'invalid'
      } else {
        this.validateUsername = 'valid'
      }
      console.log(this.username, this.validateUsername)
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: validateUsername === 'invalid' }">
      <label for="user-name">Your Name</label>
      <input v-model.trim="username" id="user-name" name="user-name" type="text" @blur="validate" />
      <p v-if="validateUsername === 'invalid'">Please enter a valid name!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input v-model="userAge" id="age" name="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="referrer" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input v-model="interests" id="interest-news" value="news" name="interest" type="checkbox" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input v-model="interests" id="interest-tutorials" value="tutorials" name="interest" type="checkbox" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input v-model="interests" id="interest-nothing" value="nothing" name="interest" type="checkbox" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input v-model="how" id="how-video" value="video" name="how" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input v-model="how" id="how-blogs" value="blogs" name="how" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input v-model="how" id="how-other" value="other" name="how" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input v-model="confirm" type="checkbox" id="terms" name="terms">
      <label for="terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  background-color: #ffd7d7;
  border-color: #ff0000;
}

.form-control.invalid label {
  color: #ff0000;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox']+label,
input[type='radio']+label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>