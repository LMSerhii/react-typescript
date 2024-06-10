import { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Title from '../components/Title/Title';
import { CardVariant, ITodo, IUser } from '../types';
import './App.css';
import axios from 'axios';
import List from '../components/List/List';
import UserItem from '../components/UserItem/UserItem';
import TodoItem from '../components/TodoItem/TodoItem';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }

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
      <Title title="Application title" />

      <div style={{ display: 'flex', gap: '10px' }}>
        <Card
          width="250px"
          height="250px"
          variant={CardVariant.outlined}
          onClick={() => console.log('card 1')}
        >
          <h2>Card 1</h2>
          <button>Buy</button>
        </Card>

        <Card
          width="250px"
          height="250px"
          variant={CardVariant.primary}
          onClick={() => console.log('card 2')}
        >
          <h2>Card 2</h2>
          <button>Buy</button>
        </Card>

        <Card
          width="250px"
          height="250px"
          variant={CardVariant.outlined}
          onClick={() => console.log('card 3')}
        >
          <h2>Card 3</h2>
          <button>Buy</button>
        </Card>

        <Card
          width="250px"
          height="250px"
          variant={CardVariant.primary}
          onClick={() => console.log('card 4')}
        >
          <h2>Card 4</h2>
          <button>Buy</button>
        </Card>
      </div>

      {/* <UserList users={users} /> */}

      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
      />
    </>
  );
};

export default App;
