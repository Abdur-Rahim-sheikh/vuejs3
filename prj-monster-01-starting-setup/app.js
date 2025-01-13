function rangeRandom(min, max) {
    return Math.random() * (max - min) + min
}

const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBar() {
            return this.monsterHealth + '%';
        },
        playerBar() {
            return this.playerHealth + '%';
        },
        mayUseSpecialAttack() {
            return (this.currentRound % 3) != 0
        },
    },
    methods: {
        attackMonster() {
            this.currentRound += 1;
            let damage = rangeRandom(5, 12);
            this.monsterHealth -= damage;
            this.attackPlayer();

        },
        specialAttackMonster() {
            this.currentRound += 1;
            let damage = rangeRandom(10, 25);
            this.monsterHealth -= damage;
            this.attackPlayer();
        },
        attackPlayer() {
            let damage = rangeRandom(8, 15);
            this.playerHealth -= damage;
        },
        healPlayer() {
            this.currentRound += 1
            let damage = rangeRandom(8, 20);
            this.playerHealth = Math.max(this.playerHealth + damage, 100)
        }
    }
});

app.mount('#game')