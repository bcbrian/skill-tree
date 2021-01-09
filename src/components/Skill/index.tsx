import React, { useContext } from "react";
import { AppContext } from "../../state";
import * as ACTIONS from "../../state/actions";

import "./styles.scss";

interface AppProps {
  id: string;
  selected?: boolean;
  activeFile: string;
  deactiveFile: string;
}

/**
 * @name Skill
 * @param id id of the skill
 * @param selected is the skill on the user
 * @param activeFile active sprite
 * @param deactiveFile deactive sprite
 */

export const Skill = function ({
  id,
  selected,
  activeFile,
  deactiveFile,
}: AppProps) {
  const { dispatch } = useContext(AppContext);

  /**
   * @name handleClick
   * @param event event.button to determine th click
   *
   * @description handle the right and left click
   * done by onClick and onContextMenu. right click removes
   * the skill left click adds the skill
   */
  function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
    if (!selected && event.button === 0) {
      dispatch({
        type: ACTIONS.ADD_SKILL,
        payload: {
          id,
        },
      });
    }
    if (selected && event.button === 2) {
      dispatch({
        type: ACTIONS.REMOVE_SKILL,
        payload: {
          id,
        },
      });
    }
  }

  const selectedModifier: string = selected ? "selected" : "not-selected";

  return (
    <div
      className={`skill skill-${id}--${selectedModifier}`}
      onClick={handleClick}
      onContextMenu={handleClick}
    >
      <img
        src={activeFile}
        className="skill__img"
        alt={`skill-${id}--${selectedModifier}`}
      />
    </div>
  );
};
