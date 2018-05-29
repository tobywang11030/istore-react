import React, { PureComponent } from 'react';
import Logo from './Logo';
import Login from './Login';
import Navigation from './Navigation';
import Cart from './Cart';

export default class Footer extends PureComponent {
  render(){
    return (
      <div class="is-footer">
        <div class="container">
          <div class="is-footer-main">
            <div class="is-footer-logo">
              <img src={require('../static/img/logo-hybris.png')} title="iStore Site" alt="iStore Site"/>
            </div>
            <div class="is-footer-copyright">
              ©2018 by Huangpu in Objectiva     声明：iStore网站仅供Razorfish项目内部学习研究使用</div>
          </div>
        </div>
      </div>
    )
  }
}

