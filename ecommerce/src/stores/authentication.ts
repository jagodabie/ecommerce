import { defineStore } from "pinia";
import type { CustomerStore, Customer } from "../types/Customer";

import axios from "axios";
import { hostsUrl } from "@/consts/api";

export const useAuthenticationStore = defineStore("customer", {
  state: () =>
    ({
      customerId: "",
      loggedIn: false,
      alreadyHasAccount: false,
    } as CustomerStore),
  getters: {
    getCustomerId(state) {
      return state.customerId;
    },
  },
  actions: {
    async authenticate(credentials: { login: string; password: string }) {
      try {
        const response = await axios.post(`${hostsUrl}auth`, credentials);
        if (response.status === 200) {
          const { accessToken, userId } = response.data;
          window.localStorage.setItem(
            "customer",
            JSON.stringify({ accessToken: accessToken, customerId: userId })
          );
          this.loggedIn = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    setLoggedIn() {
      this.loggedIn =
        !!JSON.parse(window.localStorage.getItem("customer") || "")
          .customerId || false;
      console.log("LOGGED IN");
    },
    setCustomerId() {
      if (window.localStorage.getItem("customer")) {
        this.customerId = JSON.parse(
          window.localStorage.getItem("customer") || ""
        )?.customerId;
        this.setLoggedIn();
      }
    },
  },
});
