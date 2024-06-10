import React from 'react';
import { IUser } from '../../types';

export interface UserItemProps {
  user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray' }}>
      {user.id}. {user.name} live in {user.address.city} on{' '}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
