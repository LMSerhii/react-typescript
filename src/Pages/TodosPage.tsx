import React, { FC, useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem/TodoItem';
import { ITodo } from '../types';
import List from '../components/List/List';
import Title from '../components/Title/Title';
import axios from 'axios';

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos'
      );

      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Title title="Todos Page" />

      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </>
  );
};

export default TodosPage;
