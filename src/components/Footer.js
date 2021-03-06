import React, { PureComponent } from 'react';

export default class Footer extends PureComponent {
  render(){
    return (
      <div className="is-footer">
        <div className="container">
          <div className="is-footer-main">
            <div className="is-footer-logo">
              <img src={require('../static/img/logo-hybris.png')} title="iStore Site" alt="iStore Site"/>
            </div>
            <div className="is-footer-copyright">
              ©2018 by Huangpu in Objectiva     声明：iStore网站仅供Razorfish项目内部学习研究使用</div>
          </div>
        </div>
      </div>
    )
  }
}

