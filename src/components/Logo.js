import React, { PureComponent } from 'react';

export default class Logo extends PureComponent {
  render(){
    return (
      <div className="col-sm-2">
				<div className="yCmsContentSlot is-logo">
          <div className="yCmsComponent is-header-logo">
            <a href="/">
              <img title="iStore Site" alt="iStore Site" src={require('../static/img/logo-hybris.png')}/>
            </a>
	      	</div>
        </div>
        <div className="shoptext">
					<a href="/">Shopping</a>
        </div>
			</div>
    )
  }

}

