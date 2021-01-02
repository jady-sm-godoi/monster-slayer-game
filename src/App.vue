<template>
  <h1>Monster Slayer</h1>

  <life-board :mHealth="monsterHealth" :pHealth="playerHealth"
    >barras de vida</life-board
  >

  <match-result>resultado do jogo</match-result>

  <set-control
    @attack="attack"
    @superattack="superAttack"
    @heal="heal"
  ></set-control>

  <set-log>histórico das jogadas</set-log>
</template>

<script>
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
export default {
  name: "App",
  components: ["life-board", "set-control"],
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    };
  },
  methods: {
    attack() {
      this.monsterHealth -= randomValue(5, 15);
      setTimeout(this.monsterAttack, 500);
    },
    superAttack() {
      this.monsterHealth -= randomValue(10, 25);
      setTimeout(this.monsterAttack, 500);
    },
    heal() {
      this.playerHealth += randomValue(5, 20);
      setTimeout(this.monsterAttack, 500);
    },
    monsterAttack() {
      this.playerHealth -= randomValue(5, 20);
    },
  },
};
</script>

<style></style>
