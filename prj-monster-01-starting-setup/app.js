function rangeRandom(min, max) {
    return Math.random() * (max - min) + min
}

const app = Vue.createApp({

    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
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
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }
        }
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
            this.currentRound += 1;
            let damage = rangeRandom(8, 20);
            this.playerHealth = Math.min(this.playerHealth + damage, 100)
            this.attackPlayer();
        }
    }
});

app.mount('#game')