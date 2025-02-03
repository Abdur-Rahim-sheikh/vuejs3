<template>
  <button @click="increment">Increment</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  setup() {
    const actions = mapActions(['increment']);

    return { ...actions };
  },
};
</script>