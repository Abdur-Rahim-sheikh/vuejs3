const app = Vue.createApp({
    // data: function(){} is same as data(){}
    data() {
        return {
            courseGoal: "Finish the course and learn Vue!",
            vueLink: 'https://vuejs.org'
        };
    }
});
app.mount('#user-goal');
