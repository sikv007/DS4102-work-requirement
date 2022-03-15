<template>
  <div class="row p-5">
    <div class="text-center">
      <transition mode="out-in">
        <h2 v-if="!isOpened">Hatch egg to discover a Pokémon</h2>
        <h2 v-else>
          {{ "You discovered " + name(currentPokemon.name) }}
        </h2>
      </transition>
      <h6>Pokémon discovered ({{ discovered }} / {{ pokemons.length }})</h6>
    </div>

    <div class="col-xs-12 col-md-6 mx-auto mb-4">
      <transition name="egg" mode="out-in">
        <div v-if="!isOpened">
          <img src="../../assets/0.png" alt="egg" />
        </div>
        <div v-else class="position-relative">
          <h3>
            <span v-if="newPokemon" class="badge bg-success position-absolute"
              >New</span
            >
          </h3>
          <pokemon-image :path="currentPokemon.id"></pokemon-image>
        </div>
      </transition>
    </div>

    <div class="row">
      <transition mode="out-in">
        <div v-if="!isOpened" class="col-xs-12 col-md-6 mx-auto">
          <base-button primary @event="openEgg">Hatch egg</base-button>
        </div>

        <div v-else class="col-xs-12 col-md-6 mx-auto">
          <div class="d-flex gap-4">
            <base-button link :to="`/pokedex/${currentPokemon.name}`"
              >Learn more</base-button
            >
            <base-button primary @event="reset">Try again</base-button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { usePokemons } from '../../services/pokemonServices';
import { useState } from '../../services/stateServices';
export default {
  setup() {
    const state = useState();
    const pokemons = usePokemons()

    return {
      isOpened: pokemons.isOpened,
      openEgg: pokemons.openEgg,
      name: pokemons.formatName,
      reset: pokemons.reset,
      discovered: pokemons.discovered,
      pokemons: state.state.pokemons,
      currentPokemon: pokemons.current,
      newPokemon: pokemons.newPokemon
    };
  },
};
</script>

<style scoped>
.badge {
  right: 0;
  top: 50px;
}
.egg-enter-active {
  animation: animateIn 0.5s ease;
}
.egg-leave-active {
  animation: animateOut 0.5s ease;
}
@keyframes animateOut {
  0% {
    opacity: 1;
    transform: rotate(0) translateY(0);
  }
  50% {
    opacity: 1;
    transform: rotate(-10deg) translateY(0);
  }
  100% {
    opacity: 0;
    transform: rotate(10deg) translateY(-100px);
  }
}
@keyframes animateIn {
  0% {
    opacity: 0;
    transform: scale(0) rotate(20deg);
  }
  90% {
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-in;
}
img {
  width: 100%;
}
</style>
