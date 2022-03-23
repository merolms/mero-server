import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationUpdateInput = {
  addressId?: AddressWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
