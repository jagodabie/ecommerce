<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import BaseInput from "../components/BaseInput.vue";

const { value: login } = useField<string>("login");
const { value: password } = useField<string>("password");
const { value: repeatPassword } = useField<string>("repeatPassword");
const { value: firstName } = useField<string>("firstName");
const { value: lastName } = useField<string>("lastName");
const { value: street } = useField<string>("street");
const { value: streetNumber } = useField<string>("streetNumber");
const { value: flatNumber } = useField<string>("flatNumber");
const { value: postalCode } = useField<string>("postalCode");
const { value: city } = useField<string>("city");

const schema = yup.object({
  login: yup.string().required().min(6).max(10),
  password: yup.string().required().min(4).max(20),
  repeatPassword: yup.string().oneOf([yup.ref("password"), null]),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  street: yup.string().required(),
  streetNumber: yup.string().required(),
  flatNumber: yup.string().required(),
  postalCode: yup.string().required(),
  city: yup.string().required(),
});
const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((schema) => {
  console.log(schema);
});
</script>

<template>
  <main>
    <div class="container">
      <h1>{{ $t("common.signUp", 1) }}</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <div class="form-customer-contact">
            <BaseInput
              v-model="login"
              :label="$t('common.login')"
              :placeholder="$t('common.login', 0)"
              :name="$t('common.login', 0)"
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
            <br />
            <BaseInput
              v-model="repeatPassword"
              :label="$t('common.repeat')"
              :placeholder="$t('common.repeat', 2)"
              :name="'repeatPassword'"
              :error-message="errors.repeatPassword"
            />
            <br />
            <BaseInput
              v-model="firstName"
              :label="$t('registration.firstName', 0)"
              :placeholder="$t('registration.firstName', 0)"
              :name="$t('registration.firstName', 2)"
              :error-message="errors.firstName"
            />
            <br />
            <BaseInput
              v-model="lastName"
              :label="$t('registration.secondName', 0)"
              :placeholder="$t('registration.secondName', 2)"
              :name="$t('registration.secondName', 2)"
              :error-message="errors.lastName"
            />
          </div>
          <div class="form-address">
            <BaseInput
              v-model="street"
              :label="$t('registration.address.street', 0)"
              :placeholder="$t('registration.address.street', 2)"
              :name="$t('registration.address.street', 2)"
              :error-message="errors.street"
            />
            <br />
            <BaseInput
              v-model="streetNumber"
              :label="$t('registration.address.streetNumber', 0)"
              :placeholder="$t('registration.address.streetNumber', 1)"
              :name="$t('registration.address.streetNumber', 2)"
              :error-message="errors.streetNumber"
            />
            <br />
            <BaseInput
              v-model="flatNumber"
              :label="$t('registration.address.flatNumber', 0)"
              :placeholder="$t('registration.address.flatNumber', 1)"
              :name="$t('registration.address.flatNumber', 2)"
              :error-message="errors.streetNumber"
            />
            <br />
            <BaseInput
              v-model="postalCode"
              :label="$t('registration.address.postalCode', 0)"
              :placeholder="$t('registration.address.postalCode', 1)"
              :name="$t('registration.address.postalCode', 2)"
              :error-message="errors.postalCode"
            />
            <br />
            <BaseInput
              v-model="city"
              :label="$t('registration.address.city')"
              :placeholder="$t('registration.address.city', 2)"
              :name="$t('registration.address.city', 2)"
              :error-message="errors.city"
            />
          </div>
        </div>
        <button type="submit" class="btn" @click="onSubmit">
          {{ $t("common.register", 3) }}
        </button>
      </form>
    </div>
  </main>
</template>
<style scoped>
.form-group {
  display: flex;
  flex-direction: row;
}

.form-customer-contact {
  padding: 2rem;
  width: 95%;
}
.form-address {
  padding: 2rem;
  width: 90%;
}
</style>
