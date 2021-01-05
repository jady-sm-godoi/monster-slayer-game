<template>
  <p :class="['display-4', 'fw-bold', titleColor]">{{ title }}</p>
  <div class="progress">
    <div
      :class="['progress-bar', colorBar]"
      role="progressbar"
      :style="portionLife"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  props: { title: String, life: Number },
  computed: {
    portionLife() {
      if (this.life <= 0) {
        return { width: "0%" };
      } else {
        return {
          width: `${this.life}%`,
        };
      }
    },
    colorBar() {
      if (this.life < 66 && this.life > 33) {
        return "middleLife";
      } else if (this.life <= 33) {
        return "lowLife";
      } else {
        return "fullLife";
      }
    },
    titleColor() {
      if (this.title === "Player") {
        return "playerTitle";
      }
      return "monsterTitle";
    },
  },
};
</script>

<style scoped>
.fullLife {
  background-color: seagreen;
}

.middleLife {
  background-color: orange;
}

.lowLife {
  background-color: orangered;
}
.playerTitle {
  color: greenyellow;
}
.monsterTitle {
  color: rgb(177, 19, 50);
}
</style>
