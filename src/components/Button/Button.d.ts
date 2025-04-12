import { FC, ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  bold?: boolean;
  secondary?: boolean;
  glow?: boolean;
  children: ReactNode;
}

declare const Button: FC<ButtonProps>;
export default Button;
