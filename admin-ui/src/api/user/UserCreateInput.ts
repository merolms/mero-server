import { TeamCreateNestedManyWithoutUsersInput } from "./TeamCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  teamId?: TeamCreateNestedManyWithoutUsersInput;
  username: string;
};
