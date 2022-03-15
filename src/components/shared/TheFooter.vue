<template>
  <footer :class="isDarkMode.card" class="shadow-sm mt-5">
    <base-container :padding="5">
      <p class="text-center">&copy; {{ copyright }}</p>
    </base-container>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useState } from "../../services/stateServices";
export default {
  setup() {
    const state = useState();

    const copyright = computed(() => {
      const year = new Date().getFullYear();
      return year + " Pokémon";
    });

    return {
      isDarkMode: state.isDarkMode,
      copyright,
    };
  },
};
</script>