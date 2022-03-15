<template>
  <button v-if="primary" class="btn btn-primary w-100" @click="event">
    <slot></slot>
  </button>
  <button
    v-if="outline"
    type="button"
    class="btn border border-primary text-primary w-100"
    @click="event"
  >
    <slot></slot>
  </button>
  <router-link v-if="link" :to="to" class="btn btn-primary w-100"
    ><slot></slot
  ></router-link>
  <button
    v-if="danger"
    type="button"
    class="btn btn-danger w-100"
    @click="event"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["event"],
  props: {
    primary: Boolean,
    danger: Boolean,
    outline: Boolean,
    link: Boolean,
    to: String,
  },
  setup(_, context) {
    const event = () => {
      context.emit("event");
    };
    return {
      event,
    };
  },
};
</script>
