export interface Customer {
  accessToken: string;
  login: string;
  name: string;
  secondName: string;
  email: string;
  password?: string;
  cellNumber: number | null;
  isAdmin?: boolean;
  isClient?: boolean;
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
