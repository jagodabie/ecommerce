import axios from "axios";

import type { Customer } from "../types/Customer";

export function useCustomerService() {
  return {
    async authenticate(credentials: {
      login: string;
      password: string;
    }): Promise<Customer> {
      const response = await axios.post<Customer>(
        "http://localhost:8000/auth",
        credentials
      );
      return response.data;
    },
    async getUser(id: string): Promise<Customer[]> {
      const response = await axios.get<Customer>(
        `http://localhost:8000/users/${id}/`
      );
      return response.data;
    },
  };
}
