import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types';
import Title from '../components/Title/Title';
import List from '../components/List/List';
import UserItem from '../components/UserItem/UserItem';
import { useNavigate } from 'react-router-dom';

const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
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

  return (
    <>
      <Title title="Users Page" />

      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            key={user.id}
            user={user}
            onClick={user => navigate('/users/' + user.id)}
          />
        )}
      />
    </>
  );
};

export default UsersPage;
