<template>
  <div class="alert" role="alert" id="control">
    <control-button title="attack" @click="attack"></control-button>
    <control-button
      :disabled="disabled"
      title="super"
      @click="superattack"
    ></control-button>
    <control-button
      :disabled="disabled"
      title="heal"
      @click="heal"
    ></control-button>
    <control-button @click="quit" title="quit"></control-button>
  </div>
</template>

<script>
import ControlButton from "./ControlButton.vue";
export default {
  components: { ControlButton },
  props: { round: Number },
  emits: ["attack", "superattack", "heal", "quit"],
  computed: {
    disabled() {
      return this.round % 3 !== 0;
    },
  },
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
    quit() {
      this.$emit("quit");
    },
  },
};
</script>

<style scoped>
#control {
  text-align: center;
  background-color: rgba(75, 74, 75, 0.651);
  margin: 0;
}
</style>
