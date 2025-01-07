const app = Vue.createApp({
    // data: function(){} is same as data(){}
    data() {
        return {
            courseGoalA: "<h1>Finish the course and learn Vue</h1>",
            courseGoalB: "<h3>Master the course</h3>",
            vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) return this.courseGoalA;
            else return this.courseGoalB;
        }
    }
});
app.mount('#user-goal');
