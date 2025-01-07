const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '?',
      confirmedName: ''
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name;
    },
    add(num = 1) { this.counter += num; },
    reduce() { this.counter--; },
    setName(event, lastname) { this.name = event.target.value + ' ' + lastname; },
    submitForm() {
      alert("Submitted!")
    }
  }
});

app.mount('#events');
