import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import auth from './services/authService';
import NavBar from './components/navBar';
import PasswordRecov from './components/passwordRecov';
import NotFound from './components/notFound';
import Register from './components/register';
import LandingPage from './components/landingPage';
import Search from './components/search';
import Profile from './components/profile';

class App extends React.Component {
  state = {}; // Is this necessary?

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user: user });  // This will apparently cause re-rendering
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer theme='colored' />
        <NavBar user={this.state.user}/>
        <Routes>
          <Route path='/' element={<LandingPage user={this.state.user}/>} />
          <Route path='/passwordRecovery' element={<PasswordRecov />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/search' element={<Search />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
