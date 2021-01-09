import { Skill, Skills, User, Users } from "../api";

export interface AppData {
  skills: Skill[] | null; // null means not requested yet
  user: User | null; // null is not logged in...
}

export interface AppState {
  state: AppData;
  dispatch: Function;
}

export const initialState: AppState = {
  state: {
    skills: Skills,
    user: null,
  },
  dispatch: () => {},
};
