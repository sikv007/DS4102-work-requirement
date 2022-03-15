<template>
  <base-container :padding="5">
    <section class="row">
      <article class="col-xs-12 col-lg-6">
        <h1 class="display-1 mb-4">Discover the world of Pokémon</h1>
        <h4 class="mb-4">
          Pokémon are mysterious creatures filled with many secrets. Discover
          them to learn more about them.
        </h4>
        <section class="row">
          <div class="col-xs-12 col-sm-6 col-xxl-4 mb-4">
            <base-button link to="/discover">Discover Pokémon</base-button>
          </div>
          <div class="col-xs-12 col-sm-6 col-xxl-4 mb-4">
            <base-button link to="/pokedex">Browse the Pokédex</base-button>
          </div>
        </section>
      </article>
      <article class="col-xs-12 col-lg-6 animate">
        <pokemon-image :path="random"></pokemon-image>
      </article>
    </section>
  </base-container>
</template>

<script>
export default {
  setup() {
    const random = Math.floor(Math.random() * 151) + 1;
    return {
      random,
    };
  },
};
</script>

<style scoped>
.animate {
  animation: scale 8s ease-out;
  animation-iteration-count: infinite;
}
@keyframes scale {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
