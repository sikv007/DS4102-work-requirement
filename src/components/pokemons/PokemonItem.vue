<template>
  <article class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <base-card>
      <div class="p-2">
        <pokemon-image
          :hidden="hidePokemon(pokemon)"
          :path="pokemon.id"
        ></pokemon-image>
      </div>
      <section class="card-body">
        <h3 class="card-title mb-2">{{ name(pokemon.name) }}</h3>

        <section class="d-flex gap-2 mb-4">
          <pokemon-types
            v-for="type in pokemon.type"
            :key="type"
            :type="type"
          ></pokemon-types>
        </section>

        <section class="row mb-2">
          <div class="col-xs-12">
            <base-button link :to="link">Details</base-button>
          </div>
        </section>
      </section>
    </base-card>
  </article>
</template>

<script>
import { usePokemons } from "../../services/pokemonServices";
import { useState } from "../../services/stateServices";
import PokemonTypes from "./PokemonTypes.vue";
export default {
  components: { PokemonTypes },
  props: {
    pokemon: Object,
  },
  setup(props) {
    const state = useState();
    const pokemons = usePokemons();
    const link = `/pokedex/${props.pokemon.name}`;

    return {
      link,
      hidePokemon: pokemons.hidePokemon,
      name: pokemons.formatName,
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>
