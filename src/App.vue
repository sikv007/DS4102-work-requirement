<template>
  <div :class="isDarkMode.container">
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
import { watch } from "vue";
import TheHeader from "./components/shared/TheHeader.vue";
import TheFooter from "./components/shared/TheFooter.vue";
import { useState } from "./services/stateServices";
export default {
  components: { TheHeader, TheFooter },
  setup() {
    const state = useState();
    state.setState();
    
    watch(state.state, (newValue) => {
      localStorage.setItem("state", JSON.stringify(newValue));
    });

    return {
      isDarkMode: state.isDarkMode,
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
</style>
