import React from "react";
import "./styles.scss";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  fontFamily: string;
}

const Header: React.FC<HeaderProps> = function ({ children, ...props }) {
  return (
    <div className="header">
      <div className="header__background">
        <h1 className="header__text" {...props}>
          {children}
        </h1>
      </div>
    </div>
  );
};
