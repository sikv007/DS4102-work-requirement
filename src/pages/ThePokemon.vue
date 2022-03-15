<template>
  <base-container :padding="5">
    <section class="d-flex mb-4 justify-content-between">
      <div>
        <navigate-pokemons
          :to="prevLink"
          prev
          :name="`${formatId(prevPokemon.id)} ${formatName(prevPokemon.name)}`"
        ></navigate-pokemons>
      </div>
      <div>
        <navigate-pokemons
          :to="nextLink"
          next
          :name="`${formatId(nextPokemon.id)} ${formatName(nextPokemon.name)}`"
        ></navigate-pokemons>
      </div>
    </section>
    <article class="row">
      <div class="col-xs-12 col-md-4 col-lg-5 mb-4">
        <div>
          <pokemon-image
            :hidden="hidePokemon(currentPokemon)"
            :path="currentPokemon.id"
          ></pokemon-image>
        </div>
      </div>

      <div class="col">
        <div class="d-flex gap-4 mb-2">
          <h1 class="display-5">
            <span class="small text-muted">{{
              formatId(currentPokemon.id)
            }}</span>
            {{ formatName(currentPokemon.name) }}
          </h1>
        </div>

        <section class="d-flex gap-2 mb-4">
          <pokemon-types
            v-for="type in currentPokemon.type"
            :key="type"
            :type="type"
          ></pokemon-types>
        </section>

        <p>{{ currentPokemon.description }}</p>

        <base-card>
          <div class="p-4">
            <div v-if="currentPokemon.isDiscovered">
              <h5>Stats</h5>
              <pokemon-stat
                v-for="(stat, key) in currentPokemon.stats"
                :key="key"
                :category="key"
                :stat="stat"
              ></pokemon-stat>
            </div>
            <div v-else class="row">
              <h5 class="mb-2">
                To see this Pokémons stats you need to discover it first.
              </h5>
              <div class="col-sm-6">
                <base-button link to="/discover">Discover Pokémons</base-button>
              </div>
            </div>
          </div>
        </base-card>
        <div v-if="currentPokemon.isDiscovered" class="alert alert-success">
          <span
            ><i class="bi bi-check-circle-fill"></i> {{ discoveredDate }}</span
          >
        </div>
      </div>
    </article>
  </base-container>
</template>

<script>
import PokemonStat from "../components/pokemons/PokemonStat.vue";
import PokemonTypes from "../components/pokemons/PokemonTypes.vue";
import { useRouter, useRoute } from "vue-router";
import NavigatePokemons from "../components/pokemons/PokemonNavigation.vue";
import { usePokemons } from "../services/pokemonServices";
import { useState } from "../services/stateServices";
export default {
  components: { PokemonStat, PokemonTypes, NavigatePokemons },
  props: { name: String },
  setup(props) {
    const state = useState();
    const pokemons = usePokemons();
    const router = useRouter();
    const route = useRoute();
    const currentPokemon = pokemons.currentPokemon(props);
    const nextPokemon = pokemons.nextPokemon(currentPokemon.id);
    const nextLink = `/pokedex/${nextPokemon.name}`;
    const prevPokemon = pokemons.prevPokemon(currentPokemon.id);
    const prevLink = `/pokedex/${prevPokemon.name}`;

    document.addEventListener("keydown", (e) => {
      if (route.path === "/pokedex/" + currentPokemon.name) {
        if (e.key === "ArrowRight") router.push(nextLink);
        if (e.key === "ArrowLeft") router.push(prevLink);
      }
    });

    const discoveredDate = pokemons.discoveredDate(currentPokemon);

    return {
      currentPokemon,
      nextLink,
      nextPokemon,
      prevLink,
      prevPokemon,
      hidePokemon: pokemons.hidePokemon,
      formatName: pokemons.formatName,
      formatId: pokemons.formatId,
      isDarkMode: state.isDarkMode,
      discoveredDate,
    };
  },
};
</script>
