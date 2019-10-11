import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import styled from 'styled-components';
import Axios from 'axios';
// import Request from 'request-promise';
// import PropTypes from 'prop-types';
import Title from '../../components/page/Title';
import ProfileCard from '../../components/team/ProfileCard';
import { Wrapper } from '../../components/page/Wrapper';
// import { withFirebase } from '../../firebase/Module';

const ProfileView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

function TeamPage(/* props */) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      // const result = await props.firebase.getTeamMembers().then(d => d.docs);
      // setData(result);

      /**

      const options = {
        uri: 'https://us-central1-startupuwrso.cloudfunctions.net/getTeam',
        method: 'GET',
        json: true,
      };
      const result = await Request(options).then(d => d);
      */
      const result = await Axios({
        url: 'https://us-central1-startupuwrso.cloudfunctions.net/getTeam',
        method: 'get',
      }).then(res => res.data);
      setData(result);
    }
    fetch();
  }, []);

  return (
    <Wrapper>
      <Title text="THE TEAM" />
      <ProfileView>
        {data != null && data.length > 0 ? (
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutBack"
            duration={1000}
            delay={(el, i) => i * 250}
          >
            {data.map(element => (
              <div key={element.name}>
                <ProfileCard
                  name={element.name}
                  position={element.position}
                  picture={element.photo}
                />
              </div>
            ))}
          </Anime>
        ) : (
          <h1>...</h1>
        )}
      </ProfileView>
    </Wrapper>
  );
}

export default TeamPage;
