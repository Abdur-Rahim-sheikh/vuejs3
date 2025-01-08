const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: '',
      fullnameCount: 0
    };
  },
  computed: {
    // name computed property as data variable
    fullname() {
      console.log("Running....")
      let tem = this.name
      if (this.name) tem += ' Sheikh'
      return tem;
    },
  },
  watch: {
    // this will watch data and computed variables
    // each can fetch nothing or currvalue or both cur and old value
    fullname() {
      this.fullnameCount++;
      console.log('watching fullname', this.fullnameCount);
    },
    counter(value) {
      console.log(value);
    },
    name(value, newvalue) {
      console.log(value, newvalue);
      this.fullname = value;
    }
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
