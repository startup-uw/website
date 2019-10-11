import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Axios from 'axios';
import Anime from 'react-anime';
// import { withFirebase } from 'firebase/Module';
import Moment from 'moment';
import { Wrapper } from '../../components/page/Wrapper';
import Title from '../../components/page/Title';
import EventCard from '../../components/events/EventCard/Loadable';

const EventList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Unavailable = styled.div`
  padding-left: 25px;
  font-family: Inter, Lato, sans-serif;
`;

const Header = styled.h1`
  font-weight: 600;
  font-size: 4em;
`;

const Explanation = styled.p`
  font-weight: 300;
  font-size: 1.7em;
`;

function EventsPage(/* props */) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      // const result = await props.firebase.getEvents().then(d => d.docs);
      /*
      result.sort(
        (a, b) =>
          Moment(b, 'MM/DD/YY').valueOf() - Moment(a, 'MM/DD/YY').valueOf(),
      );
      setData(result);
      */
      const result = await Axios({
        url: 'https://us-central1-startupuwrso.cloudfunctions.net/getEvents',
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
                  description={element.description}
                  date={element.date}
                  location={element.location}
                  time={element.time}
                />
              </div>
            ))}
          </Anime>
        ) : (
          <Unavailable>
            <Header> UH OH! </Header>
            <Explanation>
              Unfortunately we do not have any events listed right now,{' '}
              <b>sorry!</b>
            </Explanation>
          </Unavailable>
        )}
      </EventList>
    </Wrapper>
  );
}

/*
EventsPage.propTypes = {
  firebase: PropTypes.object.isRequired,
};
*/

// export default withFirebase(EventsPage);
export default EventsPage;
