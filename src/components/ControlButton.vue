<template>
  <button type="button" :class="['btn', colorButton]">
    {{ title.toUpperCase() }}
  </button>
</template>

<script>
export default {
  props: { title: String },
  computed: {
    colorButton() {
      if (this.title === "attack") {
        return "attack";
      } else if (this.title === "super") {
        return "super";
      } else if (this.title === "heal") {
        return "heal";
      } else {
        return "quit";
      }
    },
  },
};
</script>

<style scoped>
.attack {
  background-color: orange;
}
.super {
  background-color: red;
}
.heal {
  background-color: green;
}
.quit {
  background-color: gray;
}
</style>
