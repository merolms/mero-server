import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  description?: string | null;
  name?: string | null;
  roles?: string;
  user?: UserUpdateManyWithoutTeamsInput;
};
