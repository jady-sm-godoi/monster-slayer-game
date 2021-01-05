<template>
  <div class="alert " role="alert">
    <life-bar :life="mHealth" title="Monster"></life-bar>
    <life-bar :life="pHealth" title="Player"></life-bar>
  </div>
</template>

<script>
import LifeBar from "./LifeBar.vue";
export default {
  components: { LifeBar },
  props: { mHealth: Number, pHealth: Number },
};
</script>

<style></style>
