import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import HomePage from './components/HomePage';
import Detail from './components/Detail';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div>
        <Col xs={2}>
        <img src="https://www.code42.com/wp-content/themes/c42-corporate-wp-theme/dist/images/logo-horizontal.svg" />
        <List />
        </Col>
        <Col xs={10}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/user/:username" component={ ({match}) => <Detail username={match.params.username}/> } />
        </Switch>
        </Col>
      </div>
    );
  }
}

export default App;
