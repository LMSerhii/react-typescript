import React from 'react';
import { ITodo } from '../../types';

export interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div
      style={{
        padding: 15,
        border: '1px solid gray',
        background: todo.completed ? 'green' : 'purple',
      }}
    >
      <input type="checkbox" checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
