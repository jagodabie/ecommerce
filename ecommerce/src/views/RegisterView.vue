<script setup lang="ts">
import { ref, reactive } from "vue";
import type { Ref } from "vue";
import type { CustomerRegistrationData, Customer } from "../types/User";
import BaseInput from "../components/BaseInput.vue";

const userAccountCreationData: CustomerRegistrationData = reactive({
  login: "",
  name: "",
  secondName: "",
  email: "",
  password: "",
  cellNumber: null,
  address: {
    street: "",
    streetNumber: null,
    flatNumber: null,
    postalCode: "",
    city: "",
  },
  isAdult: false,
});

const onSubmit = () => {
  console.log("nic");
};
</script>

<template>
  <main>
    <div class="container">
      <h1>{{ $t("common.signUp", 1) }}</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <div class="form-customer-contact">
            <BaseInput :label="$t('common.login')" />
            <BaseInput :label="$t('common.password', 2)" />
            <BaseInput :label="$t('common.repeat')" />
            <BaseInput :label="$t('registration.name')" />
            <BaseInput :label="$t('registration.secondName')" />
            <BaseInput :label="$t('registration.cellNumber')" />
          </div>
          <div class="form-address">
            <BaseInput :label="$t('registration.address.street', 1)" />
            <BaseInput :label="$t('registration.address.streetNumber')" />
            <BaseInput :label="$t('registration.address.flatNumber')" />
            <BaseInput :label="$t('registration.address.postalCode')" />
            <BaseInput :label="$t('registration.address.city')" />
          </div>
        </div>
        <button type="submit" class="btn">
          {{ $t("common.register", 3) }}
        </button>
      </form>
    </div>
  </main>
</template>
<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  height: 40%;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: 0 0 10px rgb(109, 109, 114);
  padding: 2rem;
}
.form-group {
  display: flex;
  flex-direction: row;
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
