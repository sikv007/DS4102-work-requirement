<template>
  <base-container :padding="5">
    <pokemon-list></pokemon-list>
  </base-container>
</template>

<script>
import PokemonList from "../components/pokemons/PokemonList.vue";
export default {
  components: { PokemonList },
};
</script>
