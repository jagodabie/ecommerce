<script setup lang="ts">
import ValidationInput from "../components/ValidationInput.vue";
import { onMounted } from "vue";

import { useAuthenticationStore } from "@/stores/authentication";
const customerStore = useAuthenticationStore();

onMounted(() => {
  customerStore.setCustomerId();
});
</script>
<template>
  <main>
    <h1>{{ $t("common.login", 0) }}</h1>
    <ValidationInput />
  </main>
</template>
