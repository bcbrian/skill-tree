import React, { useContext } from "react";
import { AppContext } from "../../state";
import * as ACTIONS from "../../state/actions";

import "./styles.scss";

/**
 * @name SkillPoints
 */

export const SkillPoints = function () {
  const { state } = useContext(AppContext);
  const { user } = state;

  return (
    <div className="skill-points">
      <div className="skill-points__title">Skill Points</div>
      <div className="skill-points__points">
        {user?.skills.length}/{user?.skillPoints}
      </div>
    </div>
  );
};
