import React, { Component } from 'react';
import cookie from 'react-cookies';

export default class LoginForm extends Component {

  loginSubmit = () => {
    cookie.save('isLogin', true);
    window.location.href = '/';
  }

  render(){
    return (
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
                            <label className="control-label sr-only" for="j_username">
                              电脑用户名
                              <span className="mandatory">
                                <img width="5" height="6" alt="login.required" title="login.required" src={require('../static/img/mandatory.gif')}/>>
                              </span>
                              <span className="skip"></span>
                            </label>
                            <input id="j_username" name="j_username" className="form-control" placeholder="电脑用户名" type="text" value="" autocomplete="off"/>
                          </div>
                          <div className="form-group">
                            <label className="control-label sr-only" for="j_password">
                              电脑密码
                              <span className="mandatory">
                                <img width="5" height="6" alt="login.required" title="login.required" src={require('../static/img/mandatory.gif')}/>
                              </span>
                              <span className="skip"></span>
                            </label>
                            <input id="j_password" name="j_password" className="form-control password" placeholder="电脑密码" type="password" value="" autocomplete="off"/>
                          </div>
                        </div>
                        <div className="form-actions clearfix">
                          <button type="button" onClick={this.loginSubmit} className="btn btn-login positive">登录</button>
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
    )
  }

}

