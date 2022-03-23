import { TeamUpdateManyWithoutUsersInput } from "./TeamUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  teamId?: TeamUpdateManyWithoutUsersInput;
  username?: string;
};
