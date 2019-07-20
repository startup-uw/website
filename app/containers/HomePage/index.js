/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import Particles from 'react-particles-js';
import { FormattedMessage } from 'react-intl';
// import svg from 'images/deer.svg';
import styled from 'styled-components';
import Anime from 'react-anime';
import messages from './messages';

const BodyWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 80%; // TODO: fix these numbers
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Headline = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Motto = styled.h1`
  letter-spacing: 7px;
  font-size: 3.25em;
  margin-bottom: 25px;
`;

const Call = styled.h1`
  font-size: 2em;
`;

export default function HomePage() {
  return (
    <BodyWrapper>
      <Anime opacity={[0, 1]} easing="easeInOutBack" duration={2000}>
        <Headline>
          <Motto>
            <FormattedMessage {...messages.motto} />
          </Motto>
          <Call>
            <FormattedMessage {...messages.call} />
          </Call>
        </Headline>
      </Anime>
      {/*
      <Particles
        width="2000px"
        height="2000px"
        params={{
          fps_limit: 28,
          color: {
            value: '#000000',
          },
          particles: {
            color: {
              value: '#000000',
            },
            number: {
              value: 100,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 30,
              opacity: 0.4,
              color: '#000000',
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 2,
                sync: false,
              },
              value: 0.4,
            },
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: 'inside',
            move: {
              radius: 10,
            },
            url: '/rocket.svg',
            inline: {
              arrangement: `equidistant`,
            },
            draw: {
              enable: true,
              stroke: {
                color: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
          retina_detect: false,
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
            },
            modes: {
              bubble: {
                size: 6,
                distance: 40,
                color: '#000000',
              },
            },
          },
        }}
      /> */}
      {/* <SVG>
        <Graphic>
          <Anime
            points={[
              {
                value: [
                  '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
                  '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
                ],
              },
              {
                value:
                  '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369',
              },
              {
                value:
                  '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369',
              },
              {
                value:
                  '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
              },
            ]}
            easing="easeInOutQuad"
            duration={5000}
            loop
          >
            <polygon
              strokeWidth={1}
              points="70 21.814550191096792 124.8455167303656 58.508464683400376 96.73401858623401 112.35948326963441 36.44401858623402 122.28233829149906 50.154483269634405 67.12864312226692"
              stroke="black"
            />
          </Anime>
        </Graphic>
      </SVG>
          */}
    </BodyWrapper>
  );
}
