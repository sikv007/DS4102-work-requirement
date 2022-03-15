<template>
  <div></div>
</template>

<script>
import { useState } from "./services/state";
export default {
  setup() {
    const state = useState();
    state.getState();
    state.setState();
    state.watchState();
  },
};
</script>
