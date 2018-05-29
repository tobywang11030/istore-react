import React, { PureComponent } from 'react';


export default class Product extends PureComponent {

  render(){
    return (
      <div className="istore-plp-items ">
        <div className="plp-items-img">
            <a href=""
                title={this.props.title} className="productMainLink">
               
                <img src={require('../static/img/1.jpg')}
                    alt={this.props.title} title={this.props.title} id="pdpProduct" width="" height=""/>
                {/* <img src={require(this.props.img)} /> */}

            </a>
        </div>
        <div className="plp-items-text">
            <div className="items-text-title">{this.props.title}</div>
            <div className="items-text-action">
                <div className="items-text-price">{this.props.price}</div>
                <div className="items-text-owner owner-lync">
                    <span className="owner-lync">
                        <a href="">
                            <img src="../static/img/Lync-icon.png" className="lync-img" alt=""/>{this.props.owner}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

