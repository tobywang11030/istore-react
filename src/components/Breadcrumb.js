import React, { PureComponent } from 'react';

export default class breadcrumb extends PureComponent {
  render(){
    return (
			<div className="container">
				<div id="breadcrumb" className="breadcrumb">
						<ul className="clearfix">
								<li>
										<a href="/">首页</a>
								</li>

								<li className="separator">&gt;</li>
								<li>
										<a className="last">登录</a>
								</li>

						</ul>
				</div>
			</div>
    )
  }

}

