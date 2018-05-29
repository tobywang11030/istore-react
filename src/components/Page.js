import React, { PureComponent } from 'react';
import Logo from './Logo';
import Login from './Login';
import Navigation from './Navigation';
import Search from './Search';
import Cart from './Cart';
import LoginForm from './LoginForm';
import List from './List'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class Page extends PureComponent {
  render(){
    return (

    <Router>
      <div id="page" data-currency-iso-code="RMB">
        <a href="#skip-to-content" className="skiptocontent" data-role="none">Skip to content</a>
        <a href="#skiptonavigation" className="skiptonavigation" data-role="none">Skip to navigation menu</a>
        <div className="yCmsContentSlot red">
            <div className="is-header clearfix">
                <div className="container">
                    <div className="row">

                        <Logo/>
                        <Login/>
                        <div className="col-sm-7">
                            <Navigation/>
                            <Search/>
                        </div>
                        <Cart/>

                    </div>
                </div>
            </div>
        </div>
        <a id="skiptonavigation"></a>
        <div>
            <ul className="clear_fix">
            </ul>
        </div>

        <div className="container">
            <div id="breadcrumb" className="breadcrumb">
                <ul className="clearfix">
                    <li>
                        <a href="/">首页</a>
                    </li>
    
                    <li className="separator">&gt;</li>
                    <li>
    
                        <a href="#" onclick="return false;" className="last">登录</a>
                    </li>
    
                </ul>
            </div>
        </div>
    
        <div id="content" className="clearfix">
            <div className="container">
                <Route exact path="/" component={List} />
                <Route path="/login" component={LoginForm} />
            </div>
        </div>
    
    </div>
    </Router>
    )
  }
}

