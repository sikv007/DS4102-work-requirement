<template>
  <div class="col-sm-4">
    <div class="p-1 rounded-3 text-center small" :class="type">
      {{ formatName(type) }}
    </div>
  </div>
</template>

<script>
import { usePokemons } from "../../services/pokemonServices";
export default {
  props: {
    type: String,
  },
  setup() {
    const pokemons = usePokemons();
    return { formatName: pokemons.formatName };
  },
};
</script>

<style scoped>
span {
  font-weight: bold;
}
.grass {
  border: 1px solid #40c057;
}
.fire {
  border: 1px solid #f03e3e;
}
.poison {
  border: 1px solid #ae3ec9;
}
.electric {
  border: 1px solid #ffe066;
}
.water {
  border: 1px solid #339af0;
}
.flying {
  border: 1px solid #343a40;
}
.bug {
  border: 1px solid #a9e34b;
}
.normal {
  border: 1px solid #ffc078;
}
.ground {
  border: 1px solid #e67700;
}
.fighting {
  border: 1px solid #f59f00;
}
.psychic {
  border: 1px solid #f783ac;
}
.rock {
  border: 1px solid #868e96;
}
.ice {
  border: 1px solid #74c0fc;
}
.ghost {
  border: 1px solid #5f3dc4;
}
.dragon {
  border: 1px solid #5c7cfa;
}
</style>
