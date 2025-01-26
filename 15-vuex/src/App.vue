<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter'
import ChangeCounter from './components/ChangeCounter'
import { mapActions } from 'vuex'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    }
  },
  methods: {
    // addTen() {
    //   // this.$store.commit('increase', { value: 10 })
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10
    //   })
    // }
    ...mapActions(['increase'])
  }
};
</script>

<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <TheCounter />
    <ChangeCounter />
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>
</template>



<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>