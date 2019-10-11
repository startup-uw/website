/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TeamPage from 'containers/TeamPage/Loadable';
import EventsPage from 'containers/EventsPage/Loadable';
import ContactPage from 'containers/ContactPage/index';

import GlobalStyle from '../../global-styles';

import NavigationBar from '../../components/nav/header/NavigationBar';

import Footer from '../../components/nav/footer/Footer';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
`;

export default function App() {
  return (
    <React.Fragment>
      <Main>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/events" component={EventsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Main>
      <Footer />
    </React.Fragment>
  );
}
