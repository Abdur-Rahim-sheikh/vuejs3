const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: '',
    };
  },
  computed: {
    fullname() {
      console.log("Running....")
      let tem = this.name
      if (this.name) tem += ' Sheikh'
      return tem;
    },
  },
  methods: {
    add(num = 1) { this.counter += num; },
    reduce() { this.counter--; },
    setName(event) { this.name = event.target.value; },
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
