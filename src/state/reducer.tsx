import * as ACTIONS from "./actions";
import { AppState } from "./initialState";

// TODO:: NO ANY PLEASE
interface ActionInfo {
  type: ACTIONS.Action;
  payload: any;
}

export function reducer(state: AppState, { type, payload }: ActionInfo) {
  switch (type) {
    case ACTIONS.ADD_SKILL:
      return state;
    case ACTIONS.REMOVE_SKILL:
      return state;
    case ACTIONS.LOAD_SKILLS:
      return state;
    case ACTIONS.LOAD_USER:
      return state;
    default:
      throw new Error(`Reducer does not support the action: ${type}`);
  }
}
