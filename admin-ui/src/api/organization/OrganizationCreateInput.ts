import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type OrganizationCreateInput = {
  addressId?: AddressWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
};
