<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
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

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Open Sans", "sans-serif";
  font-weight: normal;
  color: rgb(83, 81, 81);
}
</style>
