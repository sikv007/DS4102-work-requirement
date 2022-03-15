import { computed, reactive, watch } from "vue";

const state = reactive({
  pokemons: [],
  darkMode: false,
  loading: false,
});

const setState = () => {
  const newState = JSON.parse(localStorage.getItem("state"));
  if (newState) {
    state.darkMode = newState.darkMode;
    state.pokemons = newState.pokemons;
  }
};

const getState = async () => {
  state.loading = true;
  const res = await fetch(
    "https://pokemon-f9013-default-rtdb.firebaseio.com/pokemons.json"
  );
  const data = await res.json();
  state.pokemons = data;
  state.loading = false;
};

const watchState = () => {
  watch(state, (newValue) => {
    localStorage.setItem("state", JSON.stringify(newValue));
  });
};

const setDarkMode = () => {
  state.darkMode = !state.darkMode;
};

const isLoading = computed(() => state.loading);

const isDarkMode = computed(() => {
  return state.darkMode
    ? {
        container: { "bg-dark": true, "text-light": true },
        button: {
          class: { "bi-brightness-high-fill": true },
          text: "Light mode",
        },
        card: { "bg-black": true },
        icon: { "text-light": true },
        form: { "text-light": true, "bg-black": true },
      }
    : {
        container: { "bg-light": true, "text-dark": true },
        button: { class: { "bi-moon-fill": true }, text: "Dark mode" },
        card: { "bg-white": true },
        icon: { "text-dark": true },
      };
});

export const useState = () => {
  return {
    state,
    setState,
    setDarkMode,
    getState,
    watchState,
    isDarkMode,
    isLoading,
  };
};
