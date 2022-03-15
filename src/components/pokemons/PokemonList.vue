<template>
  <section class="row align-items-center mb-4">
    <the-filter></the-filter>
  </section>
  <div v-if="discovered < allPokemons.length" class="mb-4">
    <h6>You have discovered {{ discovered }} Pokémon.</h6>
  </div>
  <div v-else class="mb-4">
    <h6>You have discovered all Pokémon.</h6>
  </div>
  <div class="row" v-if="pokemons.length === 0">
    <base-alert danger
      >Sorry no results matched your filters. Please try something
      else.</base-alert
    >
  </div>

  <section class="row" v-else>
    <pokemon-item
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    ></pokemon-item>
  </section>
</template>

<script>
import { usePokemons } from "../../services/pokemonServices";
import { useState } from "../../services/stateServices";
import PokemonItem from "../pokemons/PokemonItem.vue";
import TheFilter from "./PokemonFilter.vue";
export default {
  components: { PokemonItem, TheFilter },
  setup() {
    const state = useState();
    const pokemons = usePokemons();
    return {
      pokemons: pokemons.filteredPokemon,
      discovered: pokemons.discovered,
      allPokemons: state.state.pokemons,
    };
  },
};
</script>