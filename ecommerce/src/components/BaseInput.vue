<script setup lang="ts">
import { computed } from "vue";
// TODO props
const props = defineProps({
  label: String,
  placeholder: String,
  type: String,
  name: String,
  minLength: Number,
  maxLength: Number,
  modelValue: String,
});
</script>

<template>
  <label v-if="props.label" id="base-input-label-id-test">
    {{ props.modelValue }}</label
  >
  <input
    id="base-input-id-test"
    v-bind="$attrs"
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    :value="props.modelValue"
  />
</template>
<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>
