import { computed, ref } from "vue";
import { useState } from "./stateServices";

const state = useState();
const filteredPokemon = ref("");

const currentPokemon = (props) => {
  return state.state.pokemons.find((pokemon) => pokemon.name === props.name);
};

const nextPokemon = (current) => {
  if (current === state.state.pokemons.length)
    return state.state.pokemons.find((pokemon) => pokemon.id === 1);
  return state.state.pokemons.find((pokemon) => pokemon.id === current + 1);
};

const prevPokemon = (current) => {
  if (current === 1)
    return state.state.pokemons.find(
      (pokemon) => pokemon.id === state.state.pokemons.length
    );
  return state.state.pokemons.find((pokemon) => pokemon.id === current - 1);
};

const formatName = (inputName) => {
  const name = computed(
    () => inputName.slice(0, 1).toUpperCase() + inputName.slice(1)
  );
  return name.value;
};

const formatId = (inputId) => {
  const id = computed(() => String(inputId).padStart(3, 0));
  return "#" + id.value;
};

const discovered = computed(
  () => state.state.pokemons.filter((pokemon) => pokemon.isDiscovered).length
);

const types = [
  ...new Set(state.state.pokemons.flatMap((pokemon) => pokemon.type)),
];

const discoveredDate = (currentPokemon) => {
  if (currentPokemon.isDiscovered) {
    const output = computed(() => {
      const date = new Intl.DateTimeFormat("no-NB", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        year: "2-digit",
        month: "2-digit",
      }).format(new Date(currentPokemon.discoveredDate));
      const string = "You discovered this Pokémon on";
      return `${string} ${date}`;
    });
    return output.value;
  }
};

const hidePokemon = (current) => {
  const hide = computed(() => {
    if (!current.isDiscovered && !state.state.darkMode)
      return { "hide-pokemon-light": true };
    if (!current.isDiscovered && state.state.darkMode)
      return { "hide-pokemon-dark": true };
    else return { "hide-pokemon-dark": false, "hide-pokemon-light": false };
  });
  return hide.value;
};

const isOpened = ref("");
const newPokemon = ref(false);

const current = ref("");

const openEgg = () => {
  const random = Math.floor(Math.random() * 151) + 1;
  const find = state.state.pokemons.find((pokemon) => pokemon.id === random);
  isOpened.value = true;
  newPokemon.value = !find.isDiscovered ? true : false;
  current.value = currentPokemon(find);
  if (newPokemon.value) {
    find.isDiscovered = true;
    find.discoveredDate = new Date().toISOString();
  }
};

const reset = () => {
  isOpened.value = false;
};

const customPokemons = computed(() =>
  state.state.pokemons.filter((pokemon) => pokemon.isCustom)
);
const deletePokemon = (id) => {
  const index = state.state.pokemons.findIndex((pokemon) => pokemon.id === id);
  state.state.pokemons.splice(index, 1);

  let newId = 151;
  state.state.pokemons.forEach((pokemon) => {
    if (pokemon.isCustom) {
      newId++;
      pokemon.id = newId;
    }
  });
};

export const usePokemons = () => {
  return {
    currentPokemon,
    nextPokemon,
    prevPokemon,
    filteredPokemon,
    formatName,
    formatId,
    discovered,
    types,
    discoveredDate,
    hidePokemon,
    openEgg,
    reset,
    isOpened,
    newPokemon,
    current,
    customPokemons,
    deletePokemon,
  };
};
