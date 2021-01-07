import React from 'react';
import './styles.scss';

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactChild,
}

export default function Header({ children, ...props }: HeaderProps) {
  return (<div className="header__container">
    <h1 className="header__text">{children}</h1>
  </div>);
}