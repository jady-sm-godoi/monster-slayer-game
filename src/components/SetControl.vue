<template>
  <div class="alert alert-dark" role="alert">
    <control-button title="attack" @click="attack"></control-button>
    <control-button title="super" @click="superattack"></control-button>
    <control-button title="heal" @click="heal"></control-button>
    <control-button title="quit"></control-button>
  </div>
</template>

<script>
import ControlButton from "./ControlButton.vue";
export default {
  components: { ControlButton },
  emits: ["attack", "superattack", "heal"],
  methods: {
    attack() {
      this.$emit("attack");
    },
    superattack() {
      this.$emit("superattack");
    },
    heal() {
      this.$emit("heal");
    },
  },
};
</script>

<style scoped></style>
