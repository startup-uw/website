import React, { useState, useEffect } from 'react';
import Anime from 'react-anime';
import styled from 'styled-components';
import Tabletop from 'tabletop';
import Title from '../../components/page/Title';
import ProfileCard from '../../components/team/ProfileCard';
import { Wrapper } from '../../components/page/Wrapper';
import Config from '../../config';

const ProfileView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function TeamPage() {
  const [loaded, setStatus] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: Config.TEAM_URL,
      callback: googleData => {
        setStatus(true);
        setData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <Wrapper>
      <Title text="THE TEAM" />
      <ProfileView>
        {loaded && data ? (
          <Anime
            opacity={[0, 1]}
            key={Date.now()}
            easing="easeInOutBack"
            duration={1000}
            delay={(el, i) => i * 250}
          >
            {data.map(element => (
              <div key={element.Name}>
                <ProfileCard
                  name={element.Name}
                  position={element.Position}
                  picture={element.Picture}
                />
              </div>
            ))}
          </Anime>
        ) : (
          <h1>...</h1>
        )}
      </ProfileView>
      {/* }
      <Anime
        opacity={[0, 1]}
        key={Date.now()}
        easing="easeInOutBack"
        duration={1000}
        delay={(el, i) => i * 200}
      >
        <ProfileView>
          {loaded &&
            data &&
            data.map(element => (
              <ProfileCard
                key={element.Name}
                name={element.Name}
                position={element.Position}
              />
            ))}
        </ProfileView>
      </Anime>
            */}
    </Wrapper>
  );
}
