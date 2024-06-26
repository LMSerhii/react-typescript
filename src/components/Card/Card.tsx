import React from 'react';
import { CardVariant } from '../../types';

export interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  children,
  onClick,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : 'white',
        padding: '10px',
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
