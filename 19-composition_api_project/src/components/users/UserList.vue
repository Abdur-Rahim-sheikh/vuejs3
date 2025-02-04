<script setup>
import { defineProps, ref, computed, toRef } from 'vue';
import UserItem from './UserItem.vue';
import useSearch from '../../composables/useSearch';

const props = defineProps(['users']);
const users = toRef(props.users);
const {
  enteredSearchTerm,
  availableItems,
  updateSearch
} = useSearch(users, 'fullName');



const sorting = ref(null);
const sort = (mode) => {
  sorting.value = mode;
};

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableItems.value;
  }
  let asc = (sorting.value.toLowerCase() === 'asc')
  return availableItems.value.toSorted((u1, u2) => {
    return (asc ^ (u1.fullName > u2.fullName)) ? 1 : -1;
  });
});



</script>

<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</button>
    </div>
    <ul>
      <user-item v-for="user in displayedUsers" :key="user.id" :user-name="user.fullName" :id="user.id"
        @list-projects="$emit('list-projects', $event)"></user-item>
    </ul>
  </base-container>
</template>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>