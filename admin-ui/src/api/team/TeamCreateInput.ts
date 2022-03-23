import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  description?: string | null;
  name?: string | null;
  roles: string;
  user?: UserCreateNestedManyWithoutTeamsInput;
};
