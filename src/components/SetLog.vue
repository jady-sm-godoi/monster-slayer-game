<template>
  <div class="alert" role="alert" id="set">
    <ul class="list-group list-group-flush" v-for="log in logs" :key="log">
      <li class="list-group-item">
        The {{ log.who }} {{ log.what }} and take {{ log.value }} points of
        life!
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: { logs: Array },
};
</script>
<style scoped>
ul {
  text-align: center;
  display: flex;
  flex-direction: column;
}
li {
  background-color: rgba(75, 74, 75, 0);
  color: white;
  text-shadow: 2px 2px 2px black;
  font-size: 15pt;
  font-family: fantasy;
}
#set {
  background-color: rgba(75, 74, 75, 0.651);
}
</style>
