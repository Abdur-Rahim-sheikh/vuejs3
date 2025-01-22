<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges" :style="{ color: changesSaved ? 'green' : 'black' }">{{ changesSaved ? 'Changes Saved' :
    'Save Changes' }}</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false
    }
  },
  methods: {
    confirmInput() {
      // my work
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    if (!this.changesSaved) {
      const userResponse = confirm('Do you want to leave without saving changes?');
      if (userResponse) {
        next();
      }
    }
    else next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>