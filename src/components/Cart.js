import React, { PureComponent } from 'react';

export default class Cart extends PureComponent {
  render(){
    return (
      <div className="col-sm-2">
				<div className="is-header-menu">
					<div className="header-menu-postproduct">
						<a href="/product/add" alt="Publish Product" title="Publish Product">
							<span className="istore-icon-plus-circle"><i className="fas fa-plus-circle"></i></span>
							<span>发布商品</span>
						</a>
					</div>
					<div className="yCmsComponent miniCart">
             <a href="/cart" className="minicart">
	              <span className="istore-icon-shopping-cart"><i className="fas fa-cart-plus"></i></span>
        	   </a>
             <div id="miniCartLayer" className="miniCartPopup" data-refreshminicarturl="/cart/miniCart/SUBTOTAL/?" data-rolloverpopupurl="/cart/rollover/MiniCart">
             </div>
          </div>
        </div>
			</div>
    )
  }

}

