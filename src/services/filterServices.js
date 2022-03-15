import { ref } from "vue";
import { useState } from "./stateServices";
import { usePokemons } from "./pokemonServices";

const state = useState();
const pokemons = usePokemons();

const query = ref("");
const type = ref("all");
const sort = ref("id");

const sortOptions = [
  "id",
  "name (a-z)",
  "name (z-a)",
  "hp",
  "attack",
  "defense",
];

const setFilter = () => {
  pokemons.filteredPokemon.value = state.state.pokemons;
};

const search = (pokemon) => pokemon.name.includes(query.value.toLowerCase());

const filterSearch = () => {
  pokemons.filteredPokemon.value = state.state.pokemons
    .slice()
    .sort(sortMode)
    .filter(filterType)
    .filter(search);
};

const filterType = (pokemon) => {
  if (type.value === "all") return true;
  return pokemon.type.includes(type.value);
};

const filterTypes = () => {
  pokemons.filteredPokemon.value = state.state.pokemons
    .filter(search)
    .sort(sortMode)
    .filter(filterType);
};

const sortMode = (a, b) => {
  if (sort.value === "name (a-z)") return a.name < b.name ? -1 : 1;
  if (sort.value === "name (z-a)") return a.name > b.name ? -1 : 1;
  if (sort.value === "hp") return b.stats.hp - a.stats.hp;
  if (sort.value === "attack") return b.stats.attack - a.stats.attack;
  if (sort.value === "defense") return b.stats.defense - a.stats.defense;
  if (sort.value === "id") return a.id - b.id;
};

const sortPokemons = () => {
  pokemons.filteredPokemon.value = state.state.pokemons
    .filter(search)
    .filter(filterType)
    .sort(sortMode);
};

export const useFilter = () => {
  return {
    sortPokemons,
    filterTypes,
    filterSearch,
    setFilter,
    sortOptions,
    query,
    type,
    sort,
  };
};
