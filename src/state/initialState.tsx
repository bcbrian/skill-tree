import { Skill, Skills, User, Users } from "../api";

interface AppState {
  state: {
    skills: Skill[] | null; // null means not requested yet
    user: User | null; // null is not logged in...
  };
  dispatch: Function;
}

export const initialState: AppState = {
  state: {
    skills: Skills,
    user: null,
  },
  dispatch: () => {},
};
