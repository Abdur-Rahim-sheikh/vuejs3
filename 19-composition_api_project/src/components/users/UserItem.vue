<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['id', 'userName']);
const emit = defineEmits(['list-projects']);

function viewProjects() {
  emit('list-projects', props.id);
}
// export default {
//   props: ['id', 'userName'],
//   emits: ['list-projects'],
//   methods: {
//     viewProjects() {
//       this.$emit('list-projects', this.id);
//     },
//   },
// };
</script>

<template>
  <li>
    <h3>{{ userName }}</h3>
    <button @click="viewProjects">View Projects</button>
  </li>
</template>



<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>