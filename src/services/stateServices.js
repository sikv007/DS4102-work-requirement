import { reactive, computed } from "vue";
import { pokemons } from "./pokemons";

const state = reactive({
  pokemons,
  darkMode: false,
});

const setState = () => {
  const newState = JSON.parse(localStorage.getItem("state"));
  if (newState) {
    state.darkMode = newState.darkMode;
    state.pokemons = newState.pokemons;
  }
};

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

const setDarkMode = () => {
  state.darkMode = !state.darkMode;
};

export const useState = () => {
  return {
    state,
    setState,
    isDarkMode,
    setDarkMode,
  };
};
