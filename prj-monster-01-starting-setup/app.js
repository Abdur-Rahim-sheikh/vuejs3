function rangeRandom(min, max) {
    return Math.random() * (max - min) + min
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 150
        };
    },
    methods: {
        attackMonster() {
            let damage = rangeRandom(5, 12);
            this.monsterHealth -= damage;
            this.attackPlayer();

        },
        attackPlayer() {
            let damage = rangeRandom(8, 15);
            this.playerHealth -= damage;
        },
    }
});

app.mount('#game')