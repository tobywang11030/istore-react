import React, { Component } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';

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

  logout = () => {
    cookie.remove('isLogin');
    console.log('remove loginCookieFlag');
  }

  componentDidMount() { 
    var oUserInfo = $(".logged_in .logined-in-user-info");
    var hov_box = $('#hover_box');
    var t;
    oUserInfo.hover(function(){
      hov_box.css('display','block');
    }, function(){
      clearTimeout(t);
      t = setTimeout(function(){
        if (!hov_box.is('.expanded')) {
          hov_box.css('display','none');
        }
      } ,30);
    });
    hov_box.hover(function(){ 
      clearTimeout(t);
      hov_box.addClass('expanded');
    },function(){
      hov_box.removeClass('expanded').css('display','none');
    });
  }

  render(){
    var LoginDiv;
    if (!this.state.isLogin) {
      LoginDiv = (
         <a className="not-login" href="/login">
         <span className="istore-icon-user"><i className="fas fa-user"></i></span> 
         <span className="login-icon">请登录</span> 
         </a>
      )
    } else {
      LoginDiv = (
        <li className="logged_in">
			  <a className="logined-in-user-info" href="/my-account">
					<span className="istore-icon-user in"></span>
					<span className="username">Admin</span>
					<span className="username-icon istore-icon-chevron-right"><i className="fas fa-angle-down"></i></span>
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
            <a href='/' onClick = {this.logout}>退出</a>
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

