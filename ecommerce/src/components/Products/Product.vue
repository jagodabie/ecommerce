<script setup lang="ts">
import type { Product } from "@/types/Product";
export interface Props {
  product: Product;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="product-container">
    <img src="@/assets/logo.png" alt="pic" />

    <div class="product-container__content">
      <div class="product-container__name">
        {{ product.name }}
      </div>
      <div class="product-container__price">
        {{ `${product.price} $` }}
      </div>

      <p class="product-container__description_short">
        {{ product.shortDescription }}
      </p>
    </div>
    <button class="btn border">
      {{ `Add product + ` }}
    </button>
  </div>
</template>
<style scoped>
/* TODO: sufix */
.border {
  border-top: 1px solid rgb(108, 116, 116);
}
.border:hover {
  border-top: 1px solid rgb(108, 116, 116);
}
.product-container {
  margin: 1rem;
  border: 1px solid;
  height: 20rem;
  width: 15rem;
  border-color: rgb(108, 116, 116);
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-style: solid;
}
img {
  width: 70%;
  height: 45%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
}
.product-container__addToCard {
  height: 20%;
}
</style>
