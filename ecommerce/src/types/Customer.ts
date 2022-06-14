export interface Credentials {
  login: string;
  password: string;
}
export interface Customer {
  accessToken: string;
  login: string;
  name: string;
  secondName: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  isClient?: boolean;
}
export interface CustomerStore {
  customerId: string;
  loggedIn: boolean;
  alreadyHasAccount: boolean;
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
}
