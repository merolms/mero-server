import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  organizations?: OrganizationListRelationFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
