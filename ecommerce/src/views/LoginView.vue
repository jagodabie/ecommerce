<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import BaseInput from "../components/BaseInput.vue";

const login: Ref<string> = ref("");
const userPassword: Ref<string> = ref("");
const minLength: Ref<number> = ref(3);
const maxLength: Ref<number> = ref(20);
const onSubmit = () => {
  console.log(`${login.value} ${userPassword.value}`);
};
</script>

<template>
  <main>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <h1>{{ $t("common.signIn", 1) }}</h1>
        <BaseInput
          :label="$t('common.login')"
          :placeholder="$t('common.login', 0)"
          :name="$t('common.login', 0)"
          :minLength="minLength"
          :max-length="maxLength"
          v-model="login"
        />
        <BaseInput
          :label="$t('common.password', 2)"
          :placeholder="$t('common.password', 1)"
          :name="$t('common.login', 0)"
          :min-length="minLength"
          :max-length="maxLength"
        />
        <button type="submit" class="btn">
          {{ $t("common.login", 3) }}
        </button>
      </form>
      <router-link :to="'/'">{{ $t("common.forgotPassword") }}</router-link>

      <router-link :to="'/'">{{ $t("common.doNotHaveAccount") }}</router-link>
    </div>
  </main>
</template>
<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  display: flex;
  height: 40%;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 0 10px rgb(109, 109, 114);
  padding: 2rem;
}
form > .btn {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

a {
  color: rgb(122, 122, 235);
  text-decoration: none;
  padding-top: 2rem;
  display: block;
}

a:hover {
  color: rgb(159, 159, 216);
}
.btn {
  width: 100%;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 4px;
  background-color: rgb(206, 201, 201);
  font-weight: 600;
  color: rgb(83, 81, 81);
}
.btn:hover {
  background-color: rgb(212, 209, 206);
  border-color: rgb(212, 209, 206);
}
.btn:focus {
  border: none;
  outline: 2px solid rgb(167, 160, 152);
  box-shadow: 0 0 10px rgb(109, 109, 114);
  border-radius: 4px;
}
</style>
