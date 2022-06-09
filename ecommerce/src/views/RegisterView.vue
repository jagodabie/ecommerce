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
            <BaseInput
              :label="$t('common.login')"
              :placeholder="$t('common.login', 0)"
            />
            <BaseInput
              :label="$t('common.password', 2)"
              :placeholder="$t('common.password', 2)"
            />
            <BaseInput
              :label="$t('common.repeat')"
              :placeholder="$t('common.repeat', 2)"
            />
            <BaseInput
              :label="$t('registration.name')"
              :placeholder="$t('registration.name', 2)"
            />
            <BaseInput
              :label="$t('registration.secondName')"
              :placeholder="$t('registration.secondName', 2)"
            />
            <BaseInput
              :label="$t('registration.cellNumber')"
              :placeholder="$t('registration.cellNumber', 2)"
            />
          </div>
          <div class="form-address">
            <BaseInput
              :label="$t('registration.address.street', 2)"
              :placeholader="$t('registration.address.street', 2)"
            />
            <BaseInput
              :label="$t('registration.address.streetNumber')"
              :placeholder="$t('registration.address.streetNumber', 2)"
            />
            <BaseInput
              :label="$t('registration.address.flatNumber')"
              :placeholder="$t('registration.address.flatNumber', 2)"
            />
            <BaseInput
              :label="$t('registration.address.postalCode')"
              :placeholder="$t('registration.address.postalCode', 2)"
            />
            <BaseInput
              :label="$t('registration.address.city')"
              :placeholder="$t('registration.address.city', 2)"
            />
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
