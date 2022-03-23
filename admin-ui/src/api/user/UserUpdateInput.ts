import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  team?: TeamWhereUniqueInput | null;
  username?: string;
};
