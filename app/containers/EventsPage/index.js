import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function EventsPage() {
  return (
    <Wrapper>
      <Title text="UPCOMING EVENTS" />
      <EventList>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </EventList>
    </Wrapper>
  );
}
