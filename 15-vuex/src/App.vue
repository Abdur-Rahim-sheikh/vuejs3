<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter'
import ChangeCounter from './components/ChangeCounter'
import UserAuth from './components/UserAuth.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth
  },
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    ...mapGetters(['isAuthenticated'])
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
  <base-container v-if="isAuthenticated" title="Vuex">
    <h3>{{ counter }}</h3>
    <TheCounter />
    <ChangeCounter />
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
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