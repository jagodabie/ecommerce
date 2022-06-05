<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import BaseInput from "../components/BaseInput.vue";

const login: Ref<string> = ref("");
const userPassword: Ref<string> = ref("");
</script>

<template>
  <main>
    <h1>Login</h1>
    <BaseInput />
    <BaseInput />
  </main>
</template>
