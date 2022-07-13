<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";

import { useAuthenticationStore } from "@/stores/authentication";
import { useUserStore } from "./stores/customer";
const authenticationStore = useAuthenticationStore();
const customerStore = useUserStore();

onMounted(() => {
  authenticationStore.setCustomerId();
  if (authenticationStore.customerId) {
    customerStore.setLoggedInCustomerInfo(authenticationStore.customerId);
  }
});
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: normal;
  color: rgb(83, 81, 81);
}
nav {
  padding: 2rem;
}
a {
  text-decoration: none;
  padding: 2rem;
  background-color: rgba(154, 221, 195, 0.966);
  font-weight: 800;
}
a:hover {
  background-color: rgba(178, 221, 205, 0.966);
  border-bottom: solid;
}
</style>
