<template>
  <div class="p-5">
    <h4 class="mb-4">Your Pokémons</h4>
    <transition-group class="list-group" tag="ul" name="list">
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        class="list-group-item mb-4"
        :class="isDarkMode.container"
      >
        <div class="row p-2">
          <div class="col d-flex align-items-center">
            <h5 class="mb-0">
              {{ formatId(pokemon.id) }} {{ formatName(pokemon.name) }}
            </h5>
          </div>
          <div class="col">
            <base-button link :to="`/pokedex/${pokemon.name}`"
              >Details</base-button
            >
          </div>
          <div class="col">
            <base-button danger @event="deletePokemon(pokemon.id)"
              >Delete</base-button
            >
          </div>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { usePokemons } from "../../services/pokemonServices";
import { useState } from "../../services/stateServices";
export default {
  setup() {
    const state = useState();
    const pokemons = usePokemons();

    return {
      pokemons: pokemons.customPokemons,
      formatName: pokemons.formatName,
      formatId: pokemons.formatId,
      deletePokemon: pokemons.deletePokemon,
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>
<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-out;
}
/* .list-leave-active {
  position: absolute;
} */
</style>
