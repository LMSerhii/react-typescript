import React from 'react';
import { IUser } from '../../types';
import UserItem from '../UserItem/UserItem';

export interface UserListProps {
  users: Array<IUser>;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
