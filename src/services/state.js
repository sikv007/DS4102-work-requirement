import { reactive, watch } from "vue";

const state = reactive({
  pokemons: [],
  darkMode: false,
  isLoading: false,
});

const setState = () => {
  const newState = JSON.parse(localStorage.getItem("state"));
  if (newState) {
    state.darkMode = newState.darkMode;
    state.pokemons = newState.pokemons;
  }
};

const getState = async () => {
  state.isLoading = true;
  const res = await fetch(
    "https://pokemon-f9013-default-rtdb.firebaseio.com/pokemons.json"
  );
  const data = await res.json();
  console.log(data);
};

const watchState = () => {
  watch(state, (newValue) => {
    localStorage.setItem("state", JSON.stringify(newValue));
  });
};

const setDarkMode = () => {
  state.darkMode = !state.darkMode;
};

export const useState = () => {
  return {
    state,
    setState,
    setDarkMode,
    getState,
    watchState,
  };
};
