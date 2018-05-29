import React, { PureComponent } from 'react';
import LoginForm from './LoginForm';
import List from './List'
import Header from './Header';
import Breadcrumb from './Breadcrumb'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Page extends PureComponent {
  render(){
    return (
    <Router>
      <div id="page" data-currency-iso-code="RMB">
        <Header/>
        <Breadcrumb/>
        <div id="content" className="clearfix">
            <div className="container">
                <Route exact path="/" component={List} />
                <Route path="/login" component={LoginForm} />
                <Route path="/category/:categoryID" component={List} />
            </div>
        </div>
    </div>
    </Router>
    )
  }
}

