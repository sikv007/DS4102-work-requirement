<template>
  <img :src="getImage()" :class="hidden" />
</template>

<script>
export default {
  props: {
    path: Number,
    hidden: Object,
  },
  setup(props) {
    const getImage = () => {
      try {
        return new URL(
          `../../assets/pokemons/${props.path}.png`,
          import.meta.url
        ).href;
      } catch {
        return new URL(`../../assets/pokeball.png`, import.meta.url).href;
      }
    };
    return {
      getImage,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
