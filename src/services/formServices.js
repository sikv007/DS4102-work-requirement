import { reactive, ref } from "vue";
import { usePokemons } from "./pokemonServices";
import { useState } from "./stateServices";
const state = useState();
const pokemons = usePokemons();
const key = ref(0);

const form = reactive({
  name: {
    value: "",
    isValidated: true,
    message: "",
  },
  type: {
    typeAValue: "none",
    typeBValue: "none",
    isValidated: true,
    message: "",
  },
  desc: {
    value: "",
    isValidated: true,
    message: "",
  },
  stats: {
    hp: null,
    defense: null,
    attack: null,
    special: null,
    speed: null,
    isValidated: true,
    message: "",
  },
  form: {
    isValidated: false,
    message: "",
  },
});

const types = [...pokemons.types];
types.unshift("none");

const submitData = () => {
  const type = [];
  if (
    form.type.typeAValue !== "none" &&
    form.type.typeAValue !== form.type.typeBValue
  )
    type.push(form.type.typeAValue);
  if (
    form.type.typeBValue !== "none" &&
    form.type.typeBValue !== form.type.typeAValue
  )
    type.push(form.type.typeBValue);

  if (
    validateText("name", form.name.value) &&
    valiDateUniqueName(form.name.value) &&
    validateTypes(type) &&
    validateText("desc", form.desc.value) &&
    validateStats(
      +form.stats.hp,
      +form.stats.attack,
      +form.stats.defense,
      +form.stats.speed,
      +form.stats.special
    )
  ) {
    const id = state.state.pokemons.length + 1;
    const name = form.name.value.toLowerCase();
    const stats = {
      hp: +form.stats.hp,
      attack: +form.stats.attack,
      defense: +form.stats.defense,
      speed: +form.stats.speed,
      special: +form.stats.special,
    };
    const pokemon = {
      id,
      name,
      type,
      description: form.desc.value,
      isDiscovered: true,
      discoveredDate: new Date().toISOString(),
      isCustom: true,
      stats,
    };
    state.state.pokemons.push(pokemon);
    form.form.isValidated = true;
    form.form.message = "Your Pokémon was sucsesfully added to the Pokédex";
    resetForm();
    setTimeout(() => {
      form.form.isValidated = false;
    }, 3000);
  }
};

const valiDateUniqueName = (data) => {
  form.name.isValidated = state.state.pokemons.some(
    (pokemon) => pokemon.name === data.toLowerCase()
  )
    ? false
    : true;
  form.name.message =
    "The name already exists in the Pokédex. Please use an unique name ";
  return !!form.name.isValidated;
};

const validateText = (prop, data) => {
  form[prop].isValidated = data === "" ? false : true;
  form[prop].message = "Field cannot be empty";
  return !!form[prop].isValidated;
};

const validateTypes = (type) => {
  form.type.isValidated = type.length === 0 ? false : true;
  form.type.message =
    "Please add at least one type. You can only have one of each type.";
  return !!form.type.isValidated;
};

const validateStats = (...nums) => {
  form.stats.isValidated = nums.some((num) => num <= 0) ? false : true;
  form.stats.message = "Stats needs to be above 0";
  return !!form.stats.isValidated;
};

const resetForm = () => {
  form.name.value = form.desc.value = "";
  form.stats.hp =
    form.stats.attack =
    form.stats.defense =
    form.stats.speed =
    form.stats.special =
      null;
  form.type.typeAValue = form.type.typeBValue = "none";
  key.value++;
};

export const useForm = () => {
  return {
    form,
    submitData,
    types,
    key,
  };
};
