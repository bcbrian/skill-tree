import { skills } from "../api/get";
import * as ACTIONS from "./actions";
import { AppData } from "./initialState";

// TODO:: NO ANY PLEASE
interface ActionInfo {
  type: ACTIONS.Action;
  payload: any;
}

/**
 * @name reducer
 * @param state current app state
 * @param action
 *
 * @description this function manages
 * the state of the app. A reduce is
 * probaly over kill for the mvp, but is
 * going to be more justfied as the app
 * matures
 */
export function reducer(state: AppData, { type, payload }: ActionInfo) {
  switch (type) {
    /**
     * @name ADD_SKILL
     * @description takes the id of skill to
     * add. if it is not there add it. if it is
     * there dont add it.
     *
     * TODO: need to check skill count before adding
     * TODO: need to validate that all skills can be there
     */
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
    /**
     * @name REMOVE_SKILL
     * @description takes the id of skill to
     * remove. if it is there dont remove it.
     *
     * TODO: need to validate that all skills can be there
     */
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
    /**
     * @name LOAD_SKILLS
     * @description load skills for the app to use.
     */
    case ACTIONS.LOAD_SKILLS:
      return {
        ...state,
        skills: payload,
      };
    /**
     * @name LOAD_USER
     * @description load user for the app to use.
     */
    case ACTIONS.LOAD_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`Reducer does not support the action: ${type}`);
  }
}
