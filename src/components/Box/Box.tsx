import { MouseEvent, PropsWithChildren, useState } from 'react';

export interface BoxProps extends PropsWithChildren {
  name: string;
}

const Box = ({ name, children }: BoxProps) => {
  const [state, setState] = useState(0);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    console.log('click');
  };

  return (
    <div>
      {name}
      {children}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Box;
