import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './css/App.css';
import Characters from './components/Characters';
import CharacterPage from './components/CharacterPage';
import Error from './components/Error';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Nav />
        <div className='app-container'>

            <div>
              <Route exact path='/' component={({ history }) => <Characters history={history}/>} />
              <Route exact path='/characters/:id' component={({ match, history, location }) => <CharacterPage id={match.params.id} history={history} location={location}/>} />
              <Route exact path='/error' component={({ history, location }) => <Error history={history} location={location}/>} />
            </div>
         
        </div>
      </div>
      </ Router>
    );
  }
}

export default App;
