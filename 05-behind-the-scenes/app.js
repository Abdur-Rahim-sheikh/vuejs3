const app = Vue.createApp({
  beforeCreate() {
    console.log('beforeCreate')
  },

  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.inputField.value;
    },
  },

  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 7000);
// const data = {
//   message: 'Hello!',
//   longMessage: 'Hello! World!'
// };
// const handler = {
//   set(target, key, value) {
//     console.log(target, key, value);
//     if (key === 'message') {
//       target.longMessage = value + ' World!';
//     }
//     target.message = value;
//   }
// };
// const proxy = new Proxy(data, handler);

// proxy.message = 'Hello abir!!!';
// console.log(proxy.longMessage);

// proxy.message = 'kutria';
// console.log(proxy.longMessage);