import React, { PureComponent } from 'react';
import Logo from './Logo';
import Login from './Login';
import Navigation from './Navigation';
import Search from './Search';
import Cart from './Cart';

export default class Header extends PureComponent {
  render(){
    return (
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
            <a id="skip-to-content"></a>
            <div className="container">
                <div className="is-login">
                    <div className="login-background">
                        <img src={require('../static/img/login-bg.jpg')} alt=""/>
                    </div>
                    <div className="login-form">
                        <div className="yCmsContentSlot row">
                            <div className="yCmsComponent col-sm-8 col-xs-12 col-sm-offset-2">
                                <form id="loginForm" action="/j_spring_security_check" method="post">
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
                                                                    <img width="5" height="6" alt="login.required" title="login.required" src={require('../static/img/mandatory.gif')}/>
                                                                </span>
                                                                <span className="skip"></span>
                                                            </label>
                                                            <input id="j_username" name="j_username" className="form-control" placeholder="电脑用户名" type="text" value="" autocomplete="off"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="control-label sr-only" for="j_password">
                                                                电脑密码
                                                                <span className="mandatory">
                                                                    <img width="5" height="6" alt="login.required" title="login.required" src="/_ui/desktop/common/images/mandatory.gif"/>
                                                                </span>
                                                                <span className="skip"></span>
                                                            </label>
                                                            <input id="j_password" name="j_password" className="form-control password" placeholder="电脑密码" type="password" value="" autocomplete="off"/>
                                                        </div>
                                                    </div>
                                                    <div className="form-actions clearfix">
                                                        <button type="submit" className="btn btn-login positive">登录</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="hidden" name="CSRFToken" value="94523549-018f-4cc0-af15-b5a2531607f8"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    )
  }
}

