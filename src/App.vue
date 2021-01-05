<template>
  <h1>Monster Slayer</h1>

  <life-board :mHealth="monsterHealth" :pHealth="playerHealth"
    >barras de vida</life-board
  >

  <match-result :winner="winner" @playAgain="playAgain"
    >resultado do jogo</match-result
  >

  <set-control
    v-if="!winner"
    @attack="attack"
    @superattack="superAttack"
    @heal="heal"
    :round="round"
    @quit="playAgain"
  ></set-control>

  <set-log>histórico das jogadas</set-log>
</template>

<script>
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default {
  name: "App",
  components: ["life-board", "set-control", "match-result"],
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      winner: "",
      round: 0,
    };
  },
  watch: {
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
    attack() {
      this.monsterHealth -= randomValue(5, 15);
      setTimeout(this.monsterAttack, 500);
      this.round++;
    },
    superAttack() {
      this.monsterHealth -= randomValue(10, 25);
      setTimeout(this.monsterAttack, 500);
      this.round++;
    },
    heal() {
      this.playerHealth += randomValue(5, 20);
      setTimeout(this.monsterAttack, 500);
      this.round++;
    },
    monsterAttack() {
      this.playerHealth -= randomValue(5, 20);
    },
    playAgain() {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.winner = "";
      this.round = 0;
    },
  },
};
</script>

<style></style>
