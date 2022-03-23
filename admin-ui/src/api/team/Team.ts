import { User } from "../user/User";

export type Team = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  roles: string;
  updatedAt: Date;
  users?: Array<User>;
};
