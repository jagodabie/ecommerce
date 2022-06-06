export interface Customer {
  login: string;
  name: string;
  secondName: string;
  email: string;
  password?: string;
  cellNumber: number | null;
}
export interface Address {
  street: string;
  streetNumber: number | null;
  flatNumber: number | null;
  postalCode: string;
  city: string;
}
export interface CustomerRegistrationData extends Customer {
  address: Address;
  isAdult: boolean;
}
