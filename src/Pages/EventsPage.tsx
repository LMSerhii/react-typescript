import React, { FC } from 'react';
import Title from '../components/Title/Title';
import EventsExample from '../components/EventsExample/EventsExample';

const EventsPage: FC = () => {
  return (
    <>
      <Title title="Events Example Page" />

      <EventsExample />
    </>
  );
};

export default EventsPage;
