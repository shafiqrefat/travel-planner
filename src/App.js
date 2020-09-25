import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import fakeData from './components/fakeData/fakeData';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';
import Login from './components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div id="bg-image">
          <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/search">
              <Search></Search>
            </PrivateRoute>
            <Route path="/booking/:id">
              <Booking info={fakeData}/>
              </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
