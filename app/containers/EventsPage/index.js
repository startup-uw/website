import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anime from 'react-anime';
import { withFirebase } from 'firebase/Module';
import Moment from 'moment';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

function EventsPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const result = await props.firebase.getEvents().then(d => d.docs);
      result.sort(
        (a, b) =>
          Moment(b, 'MM/DD/YY').valueOf() - Moment(a, 'MM/DD/YY').valueOf(),
      );
      result.map(d => console.log(d.data()));
      setData(result);
    }
    fetch();
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
                  title={element.data().title}
                  description={element.data().description}
                  date={element.data().date}
                  location={element.data().location}
                  time={element.data().time}
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

EventsPage.propTypes = {
  firebase: PropTypes.object.isRequired,
};

export default withFirebase(EventsPage);
