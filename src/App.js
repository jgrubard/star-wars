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
              <Route exact path='/' component={Characters} />
              <Route exact path='/characters/:id' component={({ match, history }) => <CharacterPage id={match.params.id} history={history} />} />
              <Route exact path='/error' component={({ history }) => <Error history={history} />} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
