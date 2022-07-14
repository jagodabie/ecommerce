<script setup lang="ts">
import { computed } from "vue";
import ErrorMessageBase from "./ErrorMessageBase.vue";
// TODO props type

export interface Props {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  modelValue: string;
  errorMessage: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number | null): void;
}>();

const modelValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    return emit("update:modelValue", value as string | number | null);
  },
});
</script>

<template>
  <label v-if="props.label" id="base-input-label-id-test">
    {{ props.label }}</label
  >
  <input
    id="base-input-id-test"
    v-bind="$attrs"
    v-model="modelValue"
    :type="props.type ?? 'text'"
    :name="props.name"
    :placeholder="props.placeholder"
  />
  <ErrorMessageBase :error-message="props.errorMessage" />
</template>
<style scoped>
input {
  width: 100%;
  padding: 1.1rem 1.1rem;
  margin: 1.2rem 0;
  box-sizing: border-box;
  border: solid 2px rgb(99, 99, 105);
  border-radius: 7px;
  font-size: 1rem;
}

label {
  padding: 0.5rem 0 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
}

input:focus {
  border: none;
  outline: 2px solid rgb(167, 160, 152);
  box-shadow: 0 0 10px rgb(99, 99, 105);
  border-radius: 4px;
}
</style>
