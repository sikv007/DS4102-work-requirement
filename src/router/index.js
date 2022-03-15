import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../pages/TheHome.vue";
import ThePokedex from "../pages/ThePokedex.vue";
import ThePokemon from "../pages/ThePokemon.vue";
import TheDiscover from "../pages/TheDiscover.vue";
import TheCreate from "../pages/TheCreate.vue";
import TheNotFound from "../pages/TheNotFound.vue";
import { useState } from "../services/stateServices";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    { path: "/discover", component: TheDiscover },
    {
      path: "/pokedex",
      component: ThePokedex,
    },
    {
      path: "/pokedex/:name",
      component: ThePokemon,
      props: true,
      beforeEnter(to) {
        const state = useState();
        const names = state.state.pokemons.map((pokemon) =>
          pokemon.name.toLowerCase()
        );
        if (!names.includes(to.params.name)) return "/:error";
      },
    },
    { path: "/create-pokemon", component: TheCreate },
    { path: "/:notFound(.*)", component: TheNotFound },
  ],
  linkActiveClass: "active",
});

export default router;
