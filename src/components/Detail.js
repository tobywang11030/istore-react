import React, { Component } from 'react';
import axios from 'axios';

export default class Detail extends Component {


    constructor(){
        super();
        this.state = {
          product: {},
          style:{
            display:'none'
          }
        }
      }
    
      componentWillMount() {
        this.getProductByID();
        console.log('aa',this.state);
        // this.setState({
        //   product : ({
        //     "title": "大卫拖把",
        //     "primaryImage": "/img/3.jpg",
        //     "images": [{
        //       "image": "/img/3.jpg"
        //     }],
        //     "price": "¥5.0",
        //     "owner": "larajia",
        //     "ownerIcon": "/static/img/mandatory.gif"
        //   })
        // })
      }
    
      getProductByID() { 
        let pid = this.props.match.params.pid;
        let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/detail/' + pid;
        console.log(callURL);

        axios.get(callURL)
          .then(res => {
            this.setState({
                product: res.data.product
            });
          });
      }

  render(){
    
    return (
      <div className="istore-pdp"> 
          <div className="istore-pdp-body"> 
          <div className="istore-pdp-images"> 
            <div className="pdp-images-tag"> 
            <span>全新</span> 
            </div> 
            <div className="pdp-picture"> 
            <div className="pdp-picture-img" id="primary_image"> 
              <img src={this.state.product.primaryImage} alt={this.state.product.title} title={this.state.product.title} id="pdpProduct" width="455" height="515" /> 
            </div> 
            </div> 
            <div className="pdp-picture-list"> 
            <div className="scrollbtn pdp-picture-list-arrow left"></div> 
            <ul className="clearfix pdp-picture-list-control" data-maxindex="4"> 
            {
               this.state.product.images && this.state.product.images.map((item, index) => {
                    return <li key = {index} data-index="0" className=""> <img src={item.image} data-primaryimagesrc={this.state.product.primaryImage} data-galleryposition="0" alt="" height="82" /> </li> 
                })
            }
            </ul> 
            <div className="scrollbtn pdp-picture-list-arrow right"></div> 
            </div>
            <div className="pdp-review-stars"> 
            </div> 
          </div> 
          <div className="istore-pdp-details"> 
            <div className="pdp-seller"> 
            <span className="seller-name owner-lync">卖家<span className="owner-lync"> <a href="IM:&lt;sip:larryli@beijing.objectiva.local&gt;" alt="点击联系卖家" title="点击联系卖家"> <img src={require('../static/img/Lync-icon.png')} className="lync-img" alt="" /> larryli</a> </span></span> 
            </div> 
            <div className="pdp-details-title"> 
            <h3 className="details-title">山东乳山虾仁 美味</h3> 
            </div> 
            <div className="clearfix pdp-details-well"> 
            <div className="pull-left"> 
              <div id="pdp_variant_price">
              <span className="pdp-well-price">&yen;50.0</span>
              </div> 
            </div> 
            </div> 
            <div className="bundle"> 
            </div>
            <input id="hasVariantProduct" type="hidden" value="true" /> 
            <input id="baseProductCode" type="hidden" value="1-11-64-0002001" /> 
            <input id="variantProductCode" type="hidden" value="1-11-64-0002002" /> 
            <div className="pdp-OptionSelector featureOptionSelector"> 
            <div className="option-items"> 
              <div className="feature-Name">
              规格
              </div> 
              <span className="feature-option isSelected" id="0000002002" feature-code="0000002001" stock-status="inStock">400克一袋</span> 
            </div> 
            </div> 
            <div className="variantSelectorErrorMsg">
              basket.error.variant.selector
            </div> 
            <div className="deliverycost">
              运费：包邮
            </div> 
            <div className="yCmsContentSlot add-to-cart"> 
            <div className="yCmsComponent pdp-details-addcart clearfix"> 
              <div className="pdp-well-number"> 
              <label for="qtyInput" className="hidden"> 数量</label> 
              <div className="qty-group"> 
                <input type="text" maxlength="3" size="1" id="qtyInput" name="qtyInput" className="qty qty-input form-control" value="1" /> 
                <div className="qty-btn-group"> 
                <button className="qty-up"><span className="istore-icon-chevron-left"></span></button> 
                <button className="qty-down" disabled=""><span className="istore-icon-chevron-right"></span></button> 
                </div> 
              </div> 
              </div> 
              <div id="actions-container-for-AddToCart" className="pdp-cart-btn productAddToCartPanelContainer clearfix"> 
              <div className="pdp-info"> 
              </div> 
              <div className="productAddToCartPanel clearfix"> 
                <div id="AddToCart-PickUpInStoreAction" data-index="1" className="productAddToCartPanelItem"> 
                </div> 
                <div id="AddToCart-AddToCartAction" data-index="2" className="productAddToCartPanelItem"> 
                <form id="addToCartForm" className="add_to_cart_form" action="/cart/add" method="post">
                  <input type="hidden" maxlength="3" size="1" id="qty" name="qty" className="qty" value="1" /> 
                  <input type="hidden" name="productCodePost" value="1-11-64-0002001" /> 
                  <button type="button" onclick="self.location.href='/login';" className="btn btn-default btn-block js-pdp-btn-cart"> 加入购物车</button> 
                  <div> 
                  <input type="hidden" name="CSRFToken" value="bddc76e9-493c-427f-ad94-c7220678f965" /> 
                  </div>
                </form>
                </div> 
                <div id="AddToCart-ShareOnSocialNetworkAction" data-index="3" className="productAddToCartPanelItem"> 
                </div> 
              </div> 
              </div> 
              <div className="pdp-stock"> 
              <div className="stock_message">
                <span className="stock_level">999</span>&nbsp; 有货
              </div> 
              </div>
            </div>
            </div>
          </div> 
          </div> 
          <div className="istore-pdp-description"> 
          <div className="istore-pdp-details"> 
            <div className="details-title"> 
            <ul> 
              <li id="descriptionDiv" className="active">详细描述</li> 
            </ul> 
            </div> 
            <div className="bodyDiv" id="descriptionDivBody"> 
            <div className="productDescriptionText"> 
              <p className="description_p"></p>
              <div align="center">
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB2w0eZftzJ8KJjSspkXXbF7VXa_!!2899369615.jpg" className="img-ks-lazyload" data-spm-anchor-id="a220o.1000855.0.i1.727e2420ktoymr" align="absmiddle" />
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB25FOWa6gy_uJjSZKzXXb_jXXa_!!2899369615.jpg" className="img-ks-lazyload" align="absmiddle" />
              <img src="https://img.alicdn.com/imgextra/i1/2899369615/TB2Sd5Va7fb_uJkHFJHXXb4vFXa_!!2899369615.jpg" className="img-ks-lazyload" align="absmiddle" />
              </div>
              <p></p> 
            </div> 
            <div className="productFeatureclassNamees"> 
            </div>
            </div> 
            <div className="bodyDiv" id="reviewDivBody" style={this.state.style}> 
            <div className="row pdp-bottom"> 
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
              <div className="prodReview clearfix"> 
                <a href="#" id="write_review_action_main" className="write">review.write.title</a> 
              </div>
              </div> 
              <div className="summary"> 
              </div> 
            </div> 
            </div> 
          </div> 
          </div> 
     </div>
    )
  }

}
