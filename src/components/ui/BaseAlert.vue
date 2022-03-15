<template>
  <div>
    <div v-if="danger" class="alert alert-danger">
      <slot></slot>
    </div>
    <div v-if="success" class="alert alert-success">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    danger: Boolean,
    success: Boolean
  },
};
</script>
