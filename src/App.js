import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from "./components/HomePage";
import UserSignupPage from "./components/UserSignupPage";
import BandSignupPage from "./components/BandSignupPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminPage from "./components/AdminPage";
import UserLoginPage from "./components/UserLoginPage";
import BandLoginPage from "./components/BandLoginPage";


function App () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path='/user/signup'>
          <UserSignupPage />
        </Route>

        <Route exact path='/band/signup'>
          <BandSignupPage />
        </Route>

        <Route exact path='/user/login/admin'>
          <AdminLoginPage />
        </Route>

        <Route exact path='/admin-page'>
          <AdminPage />
        </Route>

        <Route exact path='/user/login'>
          <UserLoginPage />
        </Route>

        <Route exact path='/band/login'>
          <BandLoginPage />
        </Route>

        <Route path="/">
          <div>
            <p>Ops! Página não encontrada</p>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
