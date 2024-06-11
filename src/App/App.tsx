import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UsersPage from '../Pages/UsersPage';
import TodosPage from '../Pages/TodosPage';
import CardsPage from '../Pages/CardsPage';
import EventsPage from '../Pages/EventsPage';
import HomePage from '../Pages/HomePage';
import { NavLink } from 'react-router-dom';
import UserItemPage from '../Pages/UserItemPage';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', gap: '10px' }}>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/cards">Cards</NavLink>
        <NavLink to="/events">Events</NavLink>
      </div>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/users'} element={<UsersPage />} />
        <Route path={'/todos'} element={<TodosPage />} />
        <Route path={'/cards'} element={<CardsPage />} />
        <Route path={'/events'} element={<EventsPage />} />
        <Route path={'/users/:id'} element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
