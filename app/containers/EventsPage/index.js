import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';

const EventView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function EventsPage() {
  return (
    <Wrapper>
      <Title text="UPCOMING EVENTS" />
      <EventView>
        <EventCard />
        <EventCard />
      </EventView>
    </Wrapper>
  );
}
