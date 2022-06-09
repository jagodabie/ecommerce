<script setup lang="ts">
const props = defineProps({
  errorMessage: String,
});
</script>

<template>
  <span class="error-message">{{ errorMessage }}</span>
</template>
<style scoped>
.error-message {
  color: rgb(171, 76, 76);
}
</style>
