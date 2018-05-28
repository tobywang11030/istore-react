import React, { PureComponent } from 'react';
import Logo from './Logo';
import Login from './Login';
import Navigation from './Navigation';
import Cart from './Cart';

export default class Header extends PureComponent {
  render(){
    return (
      <div className="yCmsContentSlot red">
        <div className="is-header clearfix">
          <div className="container">
            <div className="row">
              <Logo/>
              <Login/>
              <Navigation/>
              <Cart/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

