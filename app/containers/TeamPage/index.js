import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import styled from 'styled-components';
import Axios from 'axios';
import Title from '../../components/page/Title';
import ProfileCard from '../../components/team/ProfileCard';
import { Wrapper } from '../../components/page/Wrapper';
import API from '../../endpoints';

const ProfileView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    justify-content: center;
  }
`;

const Placeholder = styled.img`
  width: 300px;
  height: 350px;
  padding: 20px;
`;

function TeamPage(/* props */) {
  const [data, setData] = useState([]);
  const show = false;

  useEffect(() => {
    async function fetch() {
      const result = await Axios({
        url: API.GET_TEAM,
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
        {show && data != null && data.length > 0 ? (
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
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutSine"
            duration={2500}
            loop
          >
            <Placeholder src="profile-loading.svg" />
            <Placeholder src="profile-loading.svg" />
            <Placeholder src="profile-loading.svg" />
          </Anime>
        )}
      </ProfileView>
    </Wrapper>
  );
}

export default TeamPage;
