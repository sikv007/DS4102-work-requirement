<template>
  <div class="col-xs-12 col-md-4 mb-2">
    <base-input
      type="text"
      identifier="name"
      v-model="query"
      @event="filterSearch"
      label="Search for name..."
      placeholder="Search for name..."
      validation
    >
    </base-input>
  </div>

  <div class="col-xs-12 col-md-3 col-lg-2 mb-2">
    <base-input
      type="select"
      identifier="type"
      v-model="type"
      @event="filterTypes"
      label="Filter by type"
      validation
    >
      <option v-for="type in types" :key="type" :value="type">
        {{ formatName(type) }}
      </option>
    </base-input>
  </div>

  <div class="col-xs-12 col-md-3 col-lg-2 mb-2">
    <base-input
      type="select"
      identifier="type"
      v-model="sort"
      @event="sortPokemons"
      label="Sort by"
      validation
    >
      <option v-for="option in sortOptions" :key="option" :value="option">
        {{ formatName(option) }}
      </option>
    </base-input>
  </div>
</template>

<script>
import { usePokemons } from "../../services/pokemonServices";
import { useState } from "../../services/stateServices";
import { useFilter } from "../../services/filterServices";
export default {
  setup() {
    const state = useState();
    const pokemons = usePokemons();
    const filter = useFilter();
    const types = [...pokemons.types];
    types.unshift("all");
    filter.setFilter();
    return {
      filterSearch: filter.filterSearch,
      query: filter.query,
      types,
      type: filter.type,
      filterTypes: filter.filterTypes,
      formatName: pokemons.formatName,
      sortOptions: filter.sortOptions,
      sort: filter.sort,
      sortPokemons: filter.sortPokemons,
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>
