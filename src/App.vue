<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else :class="isDarkMode.container">
    <the-header></the-header>
    <main>
      <router-view v-slot="{ Component }">
        <transition mode="out-in" name="route">
          <component :key="$route.path" :is="Component"></component>
        </transition>
      </router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { useState } from "./services/state";
import TheHeader from "./components/shared/layout/TheHeader.vue";
import TheFooter from "./components/shared/layout/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const state = useState();
    state.getState();
    state.setState();
    state.watchState();
    console.log(state.isLoading);
    return {
      isDarkMode: state.isDarkMode,
      isLoading: state.isLoading,
    };
  },
};
</script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}
.hide-pokemon-light {
  filter: brightness(0);
}
.hide-pokemon-dark {
  filter: brightness(20) saturate(0);
}
.hide-pokemon-light {
  filter: brightness(0);
}
.hide-pokemon-dark {
  filter: brightness(20) saturate(0);
}
</style>
