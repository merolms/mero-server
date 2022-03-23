import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  team?: TeamWhereUniqueInput | null;
  username: string;
};
