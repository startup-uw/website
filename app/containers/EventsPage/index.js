import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import styled from 'styled-components';
import Anime from 'react-anime';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';
import Config from '../../config';

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function EventsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: Config.EVENTS_URL,
      callback: d => {
        setData(d);
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <Wrapper>
      <Title text="UPCOMING EVENTS" />
      <EventList>
        {data.length > 0 ? (
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutBack"
            duration={1000}
            delay={(el, i) => i * 250}
          >
            {data.map(element => (
              <div key={element}>
                <EventCard
                  title={element.Title}
                  description={element.Description}
                  date={element.Date}
                  location={element.Location}
                />
              </div>
            ))}
          </Anime>
        ) : (
          <h1>...</h1>
        )}
      </EventList>
    </Wrapper>
  );
}
