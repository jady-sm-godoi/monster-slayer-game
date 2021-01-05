<template>
  <!-- model of card with image, text and button -->
  <div class="card text-white bg-dark mb-3" style="" id="card">
    <img :src="images" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ greeting }}</h5>
      <p class="card-text">
        {{ message }}
      </p>
      <button class="btn btn-danger" @click="playAgain">
        PLAY AGAIN
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { winner: String },
  emits: ["playAgain"],
  computed: {
    greeting() {
      // function define the title of card
      if (this.winner === "player") {
        return "CONGRATULATIONS!";
      } else if (this.winner === "monster") {
        return "WHAT A SHAME!";
      } else {
        return "OK! TRY AGAIN";
      }
    },
    message() {
      // function define the text of card
      if (this.winner === "player") {
        return "You fought bravely! The monster didn't stand a chance.";
      } else if (this.winner === "monster") {
        return "You faltered in the attacks. Take your potion whenever you can. Be brave!";
      } else {
        return "The monster is strong, but so are you. Be smarter and you will win!";
      }
    },
    images() {
      if (this.winner === "player") {
        return "https://storage.googleapis.com/adm-portal.appspot.com/noticias/_imgHighlight/artigo_78025.jpg?mtime=20181125004021&focal=none";
      } else if (this.winner === "monster") {
        return "https://finalfantasyxv.square-enix-games.com/public/img/playstation-vr/playstation-vr-key-art.jpg";
      } else {
        return "https://static.todamateria.com.br/upload/ad/iv/adivinhas-cke.jpg";
      }
    },
  },
  methods: {
    playAgain() {
      // function emit for the function in MatchResult.vue that ...
      this.$emit("playAgain");
    },
  },
};
</script>

<style scoped>
#card {
  width: 18rem;
  margin: 15px;
  padding: 5px;
  text-align: center;
}
</style>
