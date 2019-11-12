import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Anime from 'react-anime';
import Moment from 'moment';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';
import API from '../../endpoints';

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Placeholder = styled.img`
  @media only screen and (min-width: 501px) {
    width: 400px;
    height: 300px;
  }

  @media only screen and (max-width: 500px) {
    width: 250px;
    height: 200px;
  }
`;

function EventsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const result = await Axios({
        url: API.GET_EVENTS,
        method: 'get',
      }).then(res =>
        res.data.sort(
          (a, b) =>
            Moment(b, 'MM-DD-YY').valueOf() - Moment(a, 'MM-DD-YY').valueOf(),
        ),
      );
      setData(result);
    }
    fetch();
  }, []);

  return (
    <Wrapper>
      <Title text="UPCOMING EVENTS" />
      <EventList>
        {data.length >= 1 ? (
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
                  title={element.title}
                  picture={element.picture}
                  facebook={element.facebook}
                  description={element.description}
                  date={element.date}
                  location={element.location}
                  time={element.time}
                />
              </div>
            ))}
          </Anime>
        ) : (
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutSine"
            duration={2500}
            loop
          >
            <Placeholder src="event-loading.svg" />
          </Anime>
        )}
      </EventList>
    </Wrapper>
  );
}

export default EventsPage;
