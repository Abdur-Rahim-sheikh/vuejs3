const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num = 1) { this.counter += num; },
    reduce() { this.counter--; }
  }
});

app.mount('#events');
