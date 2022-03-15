<template>
  <div v-if="type === 'text'" class="form-floating mb-4">
    <input
      :type="type"
      class="form-control"
      :class="{
        ...isDarkMode.form,
        'border border-danger': !validation,
      }"
      :id="identifier"
      :placeholder="placeholder"
      @input="
        $emit('update:modelValue', $event.target.value);
        $emit('event');
      "
    />
    <label :for="identifier">{{ label }}</label>
  </div>

  <div v-if="type === 'select'" class="form-floating mb-4">
    <select
      class="form-select"
      :id="identifier"
      :class="{
        ...isDarkMode.form,
        'border border-danger': !validation,
      }"
      @change="
        $emit('update:modelValue', $event.target.value);
        $emit('event');
      "
    >
      <slot></slot>
    </select>
    <label :for="identifier">{{ label }}</label>
  </div>
  <div v-if="type === 'textarea'" class="form-floating mb-4">
    <textarea
      class="form-control"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{
        ...isDarkMode.form,
        'border border-danger': !validation,
      }"
      :id="identifier"
    ></textarea>
    <label :for="identifier">{{ label }}</label>
  </div>

  <div v-if="type === 'number'" class="form-floating mb-4">
    <input
      :type="type"
      class="form-control"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="{
        ...isDarkMode.form,
        'border border-danger': !validation,
      }"
      :id="identifier"
    />
    <label :for="identifier">{{ label }}</label>
  </div>
</template>

<script>
import { useState } from "../../services/stateServices";
export default {
  props: {
    type: String,
    validation: Boolean,
    identifier: String,
    label: String,
    placeholder: String,
    modelValue: undefined,
  },
  emits: ["update:modelValue", "event"],
  setup() {
    const state = useState();
    return {
      isDarkMode: state.isDarkMode,
    };
  },
};
</script>
