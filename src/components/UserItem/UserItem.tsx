import React from 'react';
import { IUser } from '../../types';

export interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: '1px solid gray' }}
    >
      {user.id}. {user.name} live in {user.address.city} on{' '}
      {user.address.street} street
    </div>
  );
};

export default UserItem;
