<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const team = this.teams.find(team => team.id === teamId);

      const affliatedMembers = team.members;
      const selectedMembers = [];
      for (const memberId of affliatedMembers) {
        const user = this.users.find(user => user.id === memberId);
        selectedMembers.push({ id: user.id, fullName: user.fullName, role: user.role });
      }

      this.teamName = team.name;
      this.members = selectedMembers;
    }
  },
  watch: {
    teamId(newvalue) {
      this.loadTeamMembers(newvalue);
      console.log(this.$route.query);
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);

  }
};
</script>

<template>
  <RouterLink to="/teams/t3">Consulting Team</RouterLink>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>


<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>