import React, { Component } from 'react';
import cookie from 'react-cookies';
import $ from 'jquery';
import AlertBox from './AlertBox'
var EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
export default class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      style: {
        display: 'none'
      },
      userName: '',
      userPws: '',
      message: '密码错误!'
    }
  }

  loginSubmit = () => {
    if (this.state.userName === 'admin' && this.state.userPws === 'admin') {
      cookie.save('isLogin', true);
      console.log('login successful');
      emitter.emit('LoginSuccessful');
      this.setState({
        style: {
          display: 'none'
        }
      });
      this.props.history.push("/");
    } else {
      this.setState({
        style: {
          display: 'block'
        }
      });
    }
  }

  handleInput = (type, event) => {
    let value = event.target.value;
    switch(type){
      case 'userName':
        this.setState({userName: value})
      break;
      case 'userPws':
        this.setState({userPws: value})
      break;
      default:;
    }

  }

  render(){
    return (
      <div>
        <AlertBox style = {this.state.style} message= {this.state.message}/>
      <div className="is-login">
        <div className="login-background">
        <img src={require('../static/img/login-bg.jpg')} alt=""/>
        </div>
        <div className="login-form">
          <div className="yCmsContentSlot row">
            <div className="yCmsComponent col-sm-8 col-xs-12 col-sm-offset-2">
              <form id="loginForm">
              <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <div className="userLogin login_container">
                      <div className="login-title">
                        <span className="login_text">Welcome</span>
                      </div>
                      <div className="item_container">
                        <div className="form_field-elements">
                          <div className="form-group">
                            <label className="control-label sr-only">
                              电脑用户名
                              <span className="mandatory">
                                <img width="5" height="6" alt="login.required" title="login.required" src={require('../static/img/mandatory.gif')}/>>
                              </span>
                              <span className="skip"></span>
                            </label>
                            <input id="j_username" name="j_username" className="form-control" placeholder="电脑用户名" type="text" value={this.state.userName}  onChange={this.handleInput.bind(this, 'userName')}/>
                          </div>
                          <div className="form-group">
                            <label className="control-label sr-only">
                              电脑密码
                              <span className="mandatory">
                                <img width="5" height="6" alt="login.required" title="login.required" src={require('../static/img/mandatory.gif')}/>
                              </span>
                              <span className="skip"></span>
                            </label>
                            <input id="j_password" name="j_password" className="form-control password" placeholder="电脑密码" type="password" value={this.state.userPws} onChange={this.handleInput.bind(this, 'userPws')}/>
                          </div>
                        </div>
                        <div className="form-actions clearfix">
                          <button type="button" onClick={this.loginSubmit.bind(this)} className="btn btn-login positive">登录</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div>
                  <input type="hidden" name="CSRFToken" value="1c7cd18d-2bab-4c5e-9118-e865bbd1f0ab"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export class Login extends Component {
  constructor(){
    super();
    this.state = {
      isLogin: false,
      style: {
        display: 'none'
      }
    }
  }

  componentWillMount() {
    emitter.on('LoginSuccessful', () => {
      console.log('LoginSuccessful Received');
      this.setLogin();
    });
    this.setLogin();
  }

  setLogin = () => {
    let loginCookieFlag = cookie.load('isLogin');
    console.log('loginCookieFlag: ' + loginCookieFlag);
    if (loginCookieFlag) {
      this.setState({
        isLogin: true
      });
    }
  }

  logout = (event) => {
    event.preventDefault();
    cookie.remove('isLogin');
    cookie.remove('cartLists');
    console.log('remove loginCookieFlag');
    window.location='/';
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

