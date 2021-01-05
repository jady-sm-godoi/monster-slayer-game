<template>
  <div class="teste">
    <card-result
      v-if="winner === 'player'"
      winner="player"
      @playAgain="playAgain"
    ></card-result>
    <card-result
      v-if="winner === 'monster'"
      winner="monster"
      @playAgain="playAgain"
    ></card-result>
    <card-result
      v-if="winner === 'draw'"
      winner="draw"
      @playAgain="playAgain"
    ></card-result>
  </div>
</template>

<script>
import CardResult from "./CardResult.vue";

export default {
  props: { winner: String },
  components: { CardResult },
  emits: ["playAgain"],
  methods: {
    playAgain() {
      this.$emit("playAgain");
    },
  },
};
</script>

<style scoped>
.teste {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
