import React, { FC } from 'react';

export interface ButtonProps {
  children: React.ReactNode;
}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
