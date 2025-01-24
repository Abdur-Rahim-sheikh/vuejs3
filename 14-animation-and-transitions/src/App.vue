<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      blockAnimated: false,
      paraIsVisible: false,
      usersVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.blockAnimated = true;
      // setTimeout(() => {
      //   this.blockAnimated = false;
      // }, 300);
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showUsers() {
      this.usersVisible = true;
    },
    hideUsers() {
      this.usersVisible = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="block" :class="{ animate: blockAnimated }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="para" mode="out-in">
      <p v-if="paraIsVisible">This is a test paragraph!</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </transition>
  </div>
  <transition name="modal">
    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
  </transition>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
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

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */

}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-50px); */
  animation: slideFade 0.3s ease-out forwards;
}

/* .para-leave-to,
.para-enter-from {
  opacity: 0;
  transform: translateY(-20px);
} */

.para-leave-active,
.para-enter-active {
  animation: slideScale 0.5s ease-out;
}

/* .para-leave-from,
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.fade-button-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.5s ease-in;
}

@keyframes slideScale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-50px) scale(1.2);
  }

  100% {
    transform: translateX(-80px) scale(1);
  }
}
</style>