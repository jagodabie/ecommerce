<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { Customer } from "../types/Customer";

import BaseInput from "../components/BaseInput.vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useCustomerService } from "@/composables/customerService";

const authenticationFailed: Ref<boolean> = ref(false);
const CustomerService = useCustomerService();
const schema = yup.object({
  login: yup.string().required().min(6).max(15),
  password: yup.string().required().min(4).max(20),
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const { value: login } = useField<string>("login");
const { value: password } = useField<string>("password");
const authentication = async (credentials: {
  login: string;
  password: string;
}) => {
  try {
    //await CustomerService.getUser("2");
    await CustomerService.authenticate(credentials);
    // console.log(
    //   CustomerService.getUser("2").then(({ result }) => console.log(result))
    //   //CustomerService.authenticate(credentials))
    // );
  } catch (e) {
    authenticationFailed.value = true;
    console.log(e);
  }
};
const onSubmit = handleSubmit((credentials) => {
  authentication(credentials);
  console.log(credentials);
});
</script>

<template>
  <main>
    <div class="container">
      <form @submit="onSubmit">
        <h1>{{ $t("common.signIn", 1) }}</h1>
        <BaseInput
          :label="$t('common.login')"
          :placeholder="$t('common.login', 0)"
          :name="$t('common.login', 0)"
          v-model="login"
          :error-message="errors.login"
        />
        <br />
        <BaseInput
          v-model="password"
          :label="$t('common.password', 0)"
          :placeholder="$t('common.password', 2)"
          :name="$t('common.password', 0)"
          :error-message="errors.password"
        />

        <button type="submit" class="btn" @click="onSubmit">
          {{ $t("common.login", 3) }}
        </button>
      </form>
      <router-link :to="'/'">{{ $t("common.forgotPassword") }}</router-link>

      <router-link :to="'/'">{{ $t("common.doNotHaveAccount") }}</router-link>
    </div>
  </main>
</template>
<style scoped>
a {
  color: rgb(122, 122, 235);
  text-decoration: none;
  padding-top: 2rem;
  display: block;
}

a:hover {
  color: rgb(159, 159, 216);
}
</style>
