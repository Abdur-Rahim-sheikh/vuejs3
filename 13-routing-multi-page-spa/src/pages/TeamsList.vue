<template>
  <RouterView />
  <ul>
    <teams-item v-for="team in teams" :key="team.id" :team="team"></teams-item>
  </ul>
</template>

<script>
import TeamsItem from '../components/teams/TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>