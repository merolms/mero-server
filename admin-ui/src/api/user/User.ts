import { Team } from "../team/Team";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  teamId?: Array<Team>;
  updatedAt: Date;
  username: string;
};
