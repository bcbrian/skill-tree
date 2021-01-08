import { Skill, Skills, User, Users } from "../api";

interface AppState {
  skills: Skill[] | null; // null means not requested yet
  user: User | null; // null is not logged in...
}

export const initialState: AppState = {
  skills: Skills,
  user: null,
};
