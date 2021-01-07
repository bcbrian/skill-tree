import React from "react";
import "./styles.scss";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactChild;
}

export default function Header({ children, ...props }: HeaderProps) {
  return (
    <div className="header">
      <div className="header__background">
        <h1 className="header__text">{children}</h1>
      </div>
    </div>
  );
}
