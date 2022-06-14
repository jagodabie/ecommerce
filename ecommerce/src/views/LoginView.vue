<script setup lang="ts">
import BaseInput from "../components/BaseInput.vue";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "../stores/authentication";
import { useI18n } from "vue-i18n";
const { t } = useI18n({
  inheritLocale: true,
});
const router = useRouter();
const schema = yup.object({
  login: yup.string().required().min(6).max(15),
  password: yup.string().required().min(4).max(20),
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});
const userStore = useAuthenticationStore();
const { value: login } = useField<string>("login");
const { value: password } = useField<string>("password");
const onSubmit = handleSubmit(({ login, password }) => {
  if (password && login) {
    userStore.authenticate({
      login,
      password,
    });
  }
  if (userStore.loggedIn) {
    alert(t("common.successFullyLogin"));
    router.push({ name: "Home" });
  }
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
          :type="password"
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
