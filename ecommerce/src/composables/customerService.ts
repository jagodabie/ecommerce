import type { Customer } from "../types/Customer";

import axios from "axios";
import { hostsUrl } from "@/consts/api";

export function useCustomerService() {
  return {
    async getCustomer(id: string): Promise<Customer> {
      const response = await axios.get<Customer>(`${hostsUrl}users/${id}`);
      return response.data;
    },
  };
}
