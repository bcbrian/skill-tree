import React, { useContext } from "react";
import { AppContext } from "../../state";
import { Skill } from "../Skill";
import "./styles.scss";

export const Skills: React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
> = function ({ children, ...props }) {
  const { state } = useContext(AppContext);
  const { skills, user } = state;
  return (
    <div className="skills">
      {skills?.map(({ id, activeSprite, deactiveSprite }) => (
        <Skill
          key={id}
          id={id}
          selected={user?.skills.includes(id)}
          activeFile={activeSprite.file}
          deactiveFile={deactiveSprite.file}
        />
      ))}
    </div>
  );
};
