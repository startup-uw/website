import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../../components/page/Title';
import ProfileCard from '../../components/team/ProfileCard';
import { Wrapper } from '../../components/page/Wrapper';
import { withFirebase } from '../../firebase/Module';

const ProfileView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

function TeamPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetch() {
      const result = await props.firebase.getTeamMembers().then(d => d.docs);
      setData(result);
    }
    fetch();
  }, []);

  return (
    <Wrapper>
      <Title text="THE TEAM" />
      <ProfileView>
        {data.length > 0 ? (
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutBack"
            duration={1000}
            delay={(el, i) => i * 250}
          >
            {data.map(element => (
              <div key={element.data().name}>
                <ProfileCard
                  name={element.data().name}
                  position={element.data().position}
                  picture={element.data().photo}
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

TeamPage.propTypes = {
  firebase: PropTypes.object.isRequired,
};

export default withFirebase(TeamPage);
