import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/postIt/Main';
import Top from './components/top/Top';
import Send from './components/send/Send';

export default class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path={'/'} component={Top}/>
              <Route exact path={'/postIt'} component={Main}/>
              <Route exact path={'/send'} component={Send}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}
