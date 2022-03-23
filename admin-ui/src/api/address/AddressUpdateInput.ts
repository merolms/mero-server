import { OrganizationUpdateManyWithoutAddressesInput } from "./OrganizationUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  organizations?: OrganizationUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
