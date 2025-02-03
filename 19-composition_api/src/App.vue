<script>
import { ref, computed } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: {
    UserData,
  },
  setup() {
    const age = ref(30);
    const firstName = ref('');
    const lastName = ref('');

    function increaseAge() {
      age.value = age.value + 1;
    }

    const username = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });


    return { username, age, increaseAge, firstName, lastName };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" :age="age" />
    <button @click="increaseAge">Change Age</button>

    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>