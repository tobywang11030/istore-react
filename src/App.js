import React, { Component } from 'react';
import './static/css/App.css';
import Header from './components/Header'
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


export default class App extends Component {

  render() {
    return (
      <Router>
        <div id="page" data-currency-iso-code="RMB">
          <Header/>
          <div id="content" className="clearfix">
            <div className="container">
              <Route path="/login" component={LoginForm} />
            </div>
          </div>
        </div>
    </Router>
  );
  }
}

