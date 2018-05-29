import React, { Component } from 'react';
import cookie from 'react-cookies'

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      isLogin: false,
      style: {
        display: 'none'
      }
    }
  }

  componentWillMount(){
    let loginCookieFlag = cookie.load('isLogin');
    console.log('loginCookieFlag: ' + loginCookieFlag);
    if (loginCookieFlag) {
      this.setState({
        isLogin: true
      });
    }
  }
  render(){
    var LoginDiv;
    if (!this.state.isLogin) {
      LoginDiv = (
         <a className="not-login" href="/login">
         <span className="istore-icon-user"><i class="fas fa-user"></i></span> 
         <span className="login-icon">请登录</span> 
         </a>
      )
    } else {
      LoginDiv = (
        <li className="logged_in">
			  <a className="logined-in-user-info" href="/my-account">
					<span className="istore-icon-user in"></span>
					<span className="username">Admin</span>
					<span className="username-icon istore-icon-chevron-right"><i class="fas fa-angle-down"></i></span>
			  </a>
			 
				<ul id="hover_box" className="dropdown-menu" style={this.state.style}>
				   <li className="hover-box ">
						  <a href="/my-account/profile">
							买家中心</a>
					</li>
                    
					<li className="hover-box ">
						  <a href="/my-account/sellingorders">
							卖家中心</a>
					</li>
					<li className="hover-box ">
						  <a href="/feedback/add">
							用户反馈</a>
					</li>
				  <li role="separator" className="divider"></li>
				  
				  <li className="hover-box">
						<a href="/logout">
							退出</a>
					</li>
				</ul>
			</li>
      )
    }
    return (
      <div className="col-sm-1">
        <div className="yCmsContentSlot is-header-login">
          {
            LoginDiv
          }
          
	      </div>
      </div>
    )
  }

}

