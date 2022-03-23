import { OrganizationCreateNestedManyWithoutAddressesInput } from "./OrganizationCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  organizations?: OrganizationCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
