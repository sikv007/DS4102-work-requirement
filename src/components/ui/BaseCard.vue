<template>
  <div class="card shadow-sm mb-4" :class="isDarkMode.card">
    <slot></slot>
  </div>
</template>

<script>
import { useState } from '../../services/stateServices';
export default {
  setup() {
    const state = useState();
    return {
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>
