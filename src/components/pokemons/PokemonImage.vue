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
        return `https://res.cloudinary.com/dplcm73vn/image/upload/v1644172218/pokemons/${props.path}.png`
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
