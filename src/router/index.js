import { createRouter, createWebHistory } from "vue-router";
import TheHome from "../pages/TheHome.vue";
import ThePokedex from "../pages/ThePokedex.vue";
import ThePokemon from "../pages/ThePokemon.vue";
import TheDiscover from "../pages/TheDiscover.vue";

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
    },
  ],
});

export default router;
