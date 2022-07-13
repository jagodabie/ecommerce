import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";
import { hostsUrl } from "@/consts/api";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {},
  }),
  getters: {
    getUsers(state) {
      return state.user;
    },
  },
  actions: {
    async setLoggedInCustomerInfo(id: string) {
      try {
        const response = await axios.get(`${hostsUrl}users/${id}`);
        const { result } = response.data;
        this.user = result[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
