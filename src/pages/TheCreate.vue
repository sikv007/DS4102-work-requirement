<template>
  <base-container :padding="5">
    <section class="row">
      <div class="col-lg-8 mx-auto">
        <base-card>
          <div class="p-5">
            <h2 class="mb-4">Create Pokémon</h2>
            <form @submit.prevent="submitData">
              <base-input
                type="text"
                :validation="form.name.isValidated"
                identifier="name"
                placeholder="Name"
                label="Name"
                v-model="form.name.value"
                :key="key"
              ></base-input>
              <transition name="form">
                <base-alert v-if="!form.name.isValidated" danger>
                  {{ form.name.message }}
                </base-alert>
              </transition>
              <div class="row">
                <div class="col">
                  <base-input
                    type="select"
                    identifier="typeA"
                    label="Primary Type"
                    v-model="form.type.typeAValue"
                    :validation="form.type.isValidated"
                    :key="key"
                  >
                    <option v-for="type in types" :key="type" :value="type">
                      {{ formatName(type) }}
                    </option>
                  </base-input>
                </div>
                <div class="col">
                  <base-input
                    type="select"
                    identifier="typeB"
                    label="Secondary Type"
                    v-model="form.type.typeBValue"
                    :validation="form.type.isValidated"
                    :key="key"
                  >
                    <option v-for="type in types" :key="type" :value="type">
                      {{ formatName(type) }}
                    </option>
                  </base-input>
                </div>
                <div class="col-xs-12">
                  <transition name="form">
                    <base-alert v-if="!form.type.isValidated" danger>
                      {{ form.type.message }}
                    </base-alert>
                  </transition>
                </div>
              </div>
              <base-input
                type="textarea"
                v-model="form.desc.value"
                :validation="form.desc.isValidated"
                placeholder="Description"
                label="Description"
                identifier="desc"
                :key="key"
              ></base-input>
              <transition name="form">
                <base-alert v-if="!form.desc.isValidated" danger>
                  {{ form.desc.message }}
                </base-alert>
              </transition>
              <div class="row">
                <div class="col-xs-12 col-md">
                  <base-input
                    type="number"
                    :validation="form.stats.isValidated"
                    identifier="hp"
                    v-model="form.stats.hp"
                    label="Hp"
                    :key="key"
                  ></base-input>
                </div>
                <div class="col-xs-12 col-md">
                  <base-input
                    type="number"
                    :validation="form.stats.isValidated"
                    identifier="attack"
                    v-model="form.stats.attack"
                    label="Attack"
                    :key="key"
                  ></base-input>
                </div>
                <div class="col-xs-12 col-md">
                  <base-input
                    type="number"
                    :validation="form.stats.isValidated"
                    identifier="defense"
                    v-model="form.stats.defense"
                    label="Defense"
                    :key="key"
                  ></base-input>
                </div>
                <div class="col-xs-12 col-md">
                  <base-input
                    type="number"
                    :validation="form.stats.isValidated"
                    identifier="speed"
                    v-model="form.stats.speed"
                    label="Speed"
                    :key="key"
                  ></base-input>
                </div>
                <div class="col-xs-12 col-md">
                  <base-input
                    type="number"
                    :validation="form.stats.isValidated"
                    identifier="special"
                    v-model="form.stats.special"
                    label="Special"
                    :key="key"
                  ></base-input>
                </div>
                <div class="col-xs-12">
                  <transition name="form">
                    <base-alert v-if="!form.stats.isValidated" danger>
                      {{ form.stats.message }}
                    </base-alert>
                  </transition>
                </div>
              </div>
              <transition name="form">
                <base-alert v-if="form.form.isValidated" success>
                  {{ form.form.message }}
                </base-alert>
              </transition>
              <base-button primary>Submit</base-button>
            </form>
          </div>
        </base-card>
        <base-card>
          <pokemons-created></pokemons-created>
        </base-card>
      </div>
     
    </section>
  </base-container>
</template>

<script>
import PokemonsCreated from "../components/pokemons/PokemonsCreated.vue";
import { usePokemons } from "../services/pokemonServices";
import { useForm } from "../services/formServices";
export default {
  components: { PokemonsCreated },
  setup() {
    const pokemons = usePokemons();
    const form = useForm();
    return {
      types: form.types,
      form: form.form,
      formatName: pokemons.formatName,
      submitData: form.submitData,
      key: form.key
    };
  },
};
</script>

<style scoped>
.form-enter-from,
.form-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.form-enter-active,
.form-leave-active {
  transition: all 0.5s ease-out;
}
</style>
