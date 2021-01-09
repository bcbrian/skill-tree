import { skills } from "../api/get";
import * as ACTIONS from "./actions";
import { AppData } from "./initialState";

// TODO:: NO ANY PLEASE
interface ActionInfo {
  type: ACTIONS.Action;
  payload: any;
}

export function reducer(state: AppData, { type, payload }: ActionInfo) {
  switch (type) {
    case ACTIONS.ADD_SKILL: {
      const { id } = payload;
      const skills = state?.user?.skills.includes(id)
        ? state?.user?.skills
        : [...(state?.user?.skills || []), id];
      return {
        ...state,
        user: {
          ...state.user,
          skills,
        },
      };
    }
    case ACTIONS.REMOVE_SKILL: {
      const { id } = payload;
      return {
        ...state,
        user: {
          ...state.user,
          skills: state?.user?.skills.filter((skill) => skill !== id),
        },
      };
    }
    case ACTIONS.LOAD_SKILLS:
      return {
        ...state,
        skills: payload,
      };
    case ACTIONS.LOAD_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`Reducer does not support the action: ${type}`);
  }
}
