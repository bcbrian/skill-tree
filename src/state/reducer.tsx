import * as ACTIONS from "./actions";

export function reducer(state, { action, payload }) {
  switch (action) {
    case ACTIONS.ADD_SKILL:
      return state;
    case ACTIONS.REMOVE_SKILL:
      return state;

    default:
      throw new Error(`Reduce does not support the action: ${action}`);
  }
}
