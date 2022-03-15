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
        return require(`../../assets/pokemons/${props.path}.png`);
      } catch {
        return require(`../../assets/pokeball.png`);
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
