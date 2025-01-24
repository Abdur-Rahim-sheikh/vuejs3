<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      blockAnimated: false,
      paraIsVisible: false,
      usersVisible: false,
      enterIntervalId: null,
      leaveIntervalId: null,
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
    beforeEnter(el) {
      console.log('beforeEnter');
      el.style.opacity = 0;

    },
    enter(el, done) {
      console.log('enter');
      let round = 1, chunk = 100;
      this.enterIntervalId = setInterval(() => {
        el.style.opacity = round / chunk;
        round++;
        if (round > chunk) {
          clearInterval(this.enterIntervalId);
          done();
        }
      }, 20);

    },
    afterEnter(el) {
      console.log('afterEnter is called after the transition has finished');
      console.log(el);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      let round = 1, chunk = 100;
      this.leaveIntervalId = setInterval(() => {
        el.style.opacity = 1 - round / chunk;
        round++;
        if (round > chunk) {
          clearInterval(this.leaveIntervalId);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log('afterLeave is called after the transition has finished');
    },
    enterCancelled() {
      console.log('enterCancelled is called when the transition is cancelled');
      clearInterval(this.enterIntervalId);
    },
    leaveCancelled() {
      console.log('leaveCancelled is called when the transition is cancelled');
      clearInterval(this.leaveIntervalId);
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
    <transition name="para" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
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

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
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