<template>
  <base-button link :to="link">
    <i v-if="next" class="bi bi-arrow-right"></i>
    <i v-if="prev" class="bi bi-arrow-left"></i>
    <h5>{{ name }}</h5>
  </base-button>
</template>

<script>
export default {
  props: {
    link: String,
    next: {
      type: Boolean,
      required: false,
      default: false,
    },
    prev: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: String,
  },
  setup() {},
};
</script>

<style scoped>
.bi {
  font-size: 32px;
}
</style>