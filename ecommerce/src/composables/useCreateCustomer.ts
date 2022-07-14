import type { Customer } from "@/types/Customer";
import axios from "axios";
import { hostsUrl } from "@/consts/api";
export default async function createCustomer(customer: Customer) {
  try {
    await axios.post(`${hostsUrl}users`, customer);
    alert("Customer created successfully");
  } catch (error) {
    console.log(error);
  }
}
