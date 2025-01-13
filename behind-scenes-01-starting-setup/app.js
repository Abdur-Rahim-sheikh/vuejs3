const app = Vue.createApp({
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
});

app.mount('#app');


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