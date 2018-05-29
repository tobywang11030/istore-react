import React, { PureComponent } from 'react';
import LoginForm from './LoginForm';
import Content from './Content'
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
                <Route exact path="/" component={Content} />
                <Route path="/login" component={LoginForm} />
                <Route path="/category/:category" component={Content} />
            </div>
        </div>
    </div>
    </Router>
    )
  }
}

