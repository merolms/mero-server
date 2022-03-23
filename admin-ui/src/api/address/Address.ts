import { Organization } from "../organization/Organization";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  id: string;
  organizations?: Array<Organization>;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
