import { Address } from "../address/Address";

export type Organization = {
  addressId?: Address | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
