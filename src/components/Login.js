import React, { Component } from 'react';

export default class Login extends Component {
  render(){
    return (
      <div className="col-sm-1">
        <div className="yCmsContentSlot is-header-login">
          <a className="not-login" href="/login">
			      <span className="istore-icon-user"><i class="fas fa-user"></i></span> 
			      <span className="login-icon">请登录</span> 
		      </a>
	      </div>
      </div>
    )
  }

}

