import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';
import auth from './services/authService';
import NavBar from './components/navBar';
import Welcome from './components/welcome';
import PasswordRecov from './components/passwordRecov';
import NotFound from './components/notFound';
import Register from './components/register';
import Feed from './components/feed';
import LandingPage from './components/landingPage';

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
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
