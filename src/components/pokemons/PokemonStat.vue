<template>
  <div class="row">
    <div class="col-sm-2">
      <p>{{ category }}</p>
    </div>
    <div class="col">
      <div class="progress">
        <div class="progress-bar" :style="statWidth"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    category: String,
    stat: Number,
  },
  setup(props) {
    const percentage = (props.stat / 150) * 100;
    const statWidth = computed(() => {
      return { width: percentage + "%" };
    });
    return {
      statWidth,
    };
  },
};
</script>

<style scoped>
.progress {
  overflow: hidden;
}
.progress-bar {
  animation: slides 1s ease-out;
}

@keyframes slides {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
