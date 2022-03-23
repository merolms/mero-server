import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  teamId?: TeamListRelationFilter;
  username?: StringFilter;
};
