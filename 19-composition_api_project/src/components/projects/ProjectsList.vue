<script setup>
import { computed, defineProps } from 'vue';
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../composables/useSearch';
const props = defineProps(['user']);
const projects = computed(() => props.user?.projects || []);
console.log(projects);
const {
  enteredSearchTerm,
  availableItems,
  updateSearch
} = useSearch(projects, 'title');

const hasProjects = computed(() => {
  return props.user.projects && availableItems.value.length > 0;
});




</script>

<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <ul v-if="hasProjects">
      <project-item v-for="prj in availableItems" :key="prj.id" :title="prj.title"></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>