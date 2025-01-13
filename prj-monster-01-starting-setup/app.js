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
            logs: []
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
            if (value < 0) this.playerHealth = 0;
            else if (value > 100) this.playerHealth = 100;
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw'
            } else if (value <= 0) {
                this.winner = 'player'
            }

            if (value < 0) this.monsterHealth = 0;
            else if (value > 100) this.monsterHealth = 100;
        }
    },
    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.logs = [];
        },
        attackMonster() {
            this.currentRound += 1;
            let damage = rangeRandom(5, 12);
            this.monsterHealth -= damage;
            this.addLog('player', 'attack', damage);
            this.attackPlayer();
        },
        specialAttackMonster() {
            this.currentRound += 1;
            let damage = rangeRandom(10, 25);
            this.monsterHealth -= damage;
            this.addLog('player', 'special-attack', damage);
            this.attackPlayer();
        },
        attackPlayer() {
            let damage = rangeRandom(8, 15);
            this.playerHealth -= damage;
            this.addLog('monster', 'attack', damage);
        },
        healPlayer() {
            this.currentRound += 1;
            let heal = rangeRandom(8, 20);
            this.playerHealth += heal;
            this.addLog('player', 'heal', heal)
            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
            this.addLog('player', 'surrender', 0)
        },
        addLog(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
});

app.mount('#game')