import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('DRAG');
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Controlled"
      />
      <input ref={inputRef} type="text" placeholder="Uncontrolled" />

      <button onClick={handleClick}>Click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: '200px',
          height: '200px',
          background: 'red',
          marginTop: '15px',
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: '200px',
          height: '200px',
          background: isDrag ? 'blue' : 'red',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
