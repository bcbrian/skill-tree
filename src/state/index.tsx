import React, { useReducer } from "react";

import { initialState } from "./initialState";
import { reducer } from "./reducer";

export const AppContext = React.createContext(initialState);

export const AppContainer: React.FC = function (props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }} {...props} />;
};
