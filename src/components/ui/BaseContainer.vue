<template>
  <div :class="pad" class="container">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    padding: Number,
  },
  setup(props) {
    const pad = computed(() => {
      const styles = {
        ["pt-" + props.padding]: true,
        ["pb-" + props.padding]: true,
      };
      return styles;
    });
    return {
      pad,
    };
  },
};
</script>

<style scoped>
</style>
