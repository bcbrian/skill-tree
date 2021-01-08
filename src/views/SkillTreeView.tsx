import React, { useContext, useEffect } from "react";
// import "./App.scss";
import { Header } from "../components/Header";
import { AppContext } from "../state";
import * as ACTIONS from "../state/actions";

interface AppProps {
  api: {
    get: {
      user: Function;
      skills: Function;
    };
  };
}

export function SkillTreeView({ api }: AppProps) {
  const { state, dispatch } = useContext(AppContext);
  useEffect(function getData() {
    dispatch({ type: ACTIONS.LOAD_USER, payload: api.get.user() });
    dispatch({ type: ACTIONS.LOAD_SKILLS, payload: api.get.skills() });
  }, []);

  return state.user == null ? null : (
    <div className="App">
      <Header>
        TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
      </Header>
    </div>
  );
}
