const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '?'
    };
  },
  methods: {
    add(num = 1) { this.counter += num; },
    reduce() { this.counter--; },
    setName(event, lastname) { this.name = event.target.value + ' ' + lastname; }
  }
});

app.mount('#events');
