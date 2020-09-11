import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from "./components/HomePage";
import AdminSignupPage from "./components/AdminSignupPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPage from "./components/AdminPage";
import UserSignupPage from "./components/UserSignupPage";
import UserLoginPage from "./components/UserLoginPage";
import BandSignupPage from "./components/BandSignupPage";
import BandLoginPage from "./components/BandLoginPage";
import BandDetailsPage from "./components/BandDetailsPage";
import FeedPage from "./components/FeedPage";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path='/user/signup'>
            <UserSignupPage />
          </Route>

          <Route exact path='/user/login'>
            <UserLoginPage />
          </Route>

          <Route exact path='/user/login/admin'>
            <AdminLoginPage />
          </Route>

          <Route exact path='/user/signup/admin'>
            <AdminSignupPage />
          </Route>

          <Route exact path='/band/signup'>
            <BandSignupPage />
          </Route>

          <Route exact path='/band/all'>
            <BandDetailsPage />
          </Route>

          <Route exact path='/band/login'>
            <BandLoginPage />
          </Route>

          <Route exact path='/admin-page'>
            <AdminPage />
          </Route>

          <Route exact path="/feed">
            <FeedPage />
          </Route>

          <Route path="/">
            <div>
              <p>Ops! Página não encontrada</p>
            </div>
          </Route>
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
