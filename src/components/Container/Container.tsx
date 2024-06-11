import React, { FC } from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div style={{ display: 'flex', gap: '10px' }}>{children}</div>;
};

export default Container;
