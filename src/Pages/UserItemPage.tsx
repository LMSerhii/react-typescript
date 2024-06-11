import { FC, useEffect, useState } from 'react';
import { IUser } from '../types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button/Button';
import Title from '../components/Title/Title';

export type UserItemPageParams = {
  id: string;
};

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );

        setUser(response.data);
      } catch (error) {
        alert(error);
      }
    }

    if (params.id) fetchUser();
  }, [params.id]);

  return (
    <div>
      <Button onClick={() => navigate('/users')}>Back</Button>
      <Title title={`Page user: ${user?.name}`} />
      <div>{user?.email}</div>
      <div>
        {user?.address.city} - {user?.address.street} - {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
