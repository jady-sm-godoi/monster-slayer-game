<template>
  <h1>Monster Slayer</h1>
  <!-- components: life of players -->
  <life-board :mHealth="monsterHealth" :pHealth="playerHealth"
    >barras de vida</life-board
  >
  <!-- components: results of play -->
  <match-result :winner="winner" @playAgain="playAgain"
    >resultado do jogo</match-result
  >
  <!-- components: controls buttons -->
  <set-control
    v-if="!winner"
    @attack="attack"
    @superattack="superAttack"
    @heal="heal"
    :round="round"
    @quit="playAgain"
  ></set-control>
  <!-- components: actions list of players -->
  <set-log v-if="!winner && round >= 1" :logs="logs"></set-log>
</template>

<script>
function randomValue(min, max) {
  // function to generate value for attacks and heals
  return Math.floor(Math.random() * (max - min) + min);
}
export default {
  name: "App",
  components: ["life-board", "set-control", "match-result", "set-control"],
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      winner: "",
      round: 0,
      logs: [],
    };
  },
  watch: {
    // these functions define the 'winner' value according to the 'monsterHealth' and 'playerHealth' values
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player";
      }
    },
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "monster";
      }
    },
  },
  methods: {
    // the actions of game
    attack() {
      let value = randomValue(5, 15);
      this.monsterHealth -= value;
      setTimeout(this.monsterAttack, 500);
      this.setLogs("player", "attack", value);
      this.round++;
    },
    superAttack() {
      let value = randomValue(10, 25);
      this.monsterHealth -= value;
      setTimeout(this.monsterAttack, 500);
      this.setLogs("player", "superattack", value);
      this.round++;
    },
    heal() {
      let value = randomValue(5, 20);
      this.playerHealth += value;
      setTimeout(this.monsterAttack, 500);
      this.setLogs("player", "heal", value);
      this.round++;
    },
    monsterAttack() {
      let value = randomValue(5, 20);
      this.playerHealth -= value;
      this.setLogs("monster", "attack", value);
    },
    playAgain() {
      // for restart game
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = "";
      this.round = 0;
      this.logs = [];
    },
    setLogs(who, what, value) {
      // accessory function to compose the log
      this.logs.unshift({ who: who, what: what, value: value });
    },
  },
};
</script>

<style>
h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(114, 152, 209);
  font-weight: bolder;
  font-size: 35pt;
}
body {
  background-position-x: -2cm;
  background-image: url(https://finalfantasyxv.square-enix-games.com/public/img/playstation-vr/playstation-vr-key-art.jpg);
}
</style>
