<template>
  <base-container :padding="5">
    <section class="row">
      <article class="col-xs-12 col-lg-8 mx-auto">
        <base-card>
          <transition name="discovered" mode="out-in">
            <discover-pokemon
              v-if="discovered !== pokemons.length"
            ></discover-pokemon>
            <section v-else class="row p-5 text-center">
              <h2 class="mb-4">
                You have discovered all the pokemons. You can now call yourself
                a true Pokémon master
              </h2>
              <h5 class="mb-4">
                Browse all the pokemons in the pokedex to learn more about them
              </h5>
              <div class="col-xs-12 col-lg-6 mx-auto">
                <base-button link to="/pokedex">Browse Pokemon</base-button>
              </div>
            </section>
          </transition>
        </base-card>
      </article>
    </section>
  </base-container>
</template>

<script>
import DiscoverPokemon from "../components/pokemons/PokemonDiscover.vue";
import { useState } from "../services/stateServices";
import { usePokemons } from "../services/pokemonServices";
export default {
  components: { DiscoverPokemon },
  setup() {
    const state = useState();
    const pokemons = usePokemons()
    return {
      discovered: pokemons.discovered,
      pokemons: state.state.pokemons,
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>

<style scoped>
.discovered-enter-from,
.discovered-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.discovered-enter-to,
.discovered-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.discovered-enter-active,
.discovered-leave-active {
  transition: all 0.5s ease-out;
}
</style>
