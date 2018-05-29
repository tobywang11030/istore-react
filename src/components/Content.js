import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';
import axios from 'axios';

export default class Content extends Component {



    constructor(){
        super();
        this.state = {
          products: []
        }
      }
    
      componentWillMount() {
        this.getProductsByCategory();
      }
    
      getProductsByCategory() {

        let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';

        let category = this.props.match.params.category;
        if(category==='books'){
            callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';
        }else if(category==='foods'){
            callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';
        }else if(category==='3c'){
            callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';
        }else if(category==='living'){
            callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/category';
        }

        axios.get(callURL)
          .then(res => {
            this.setState({
                products: ([
                    {
                      "title": "苹果",
                      "img": "../static/img/1.jpg",
                      "price":"¥5.0",
                      "owner":"larajia",
                      "ownerIcon":"../static/img/mandatory.gif"
                    },
                    {
                      "title": "秘制牛肉酱",
                      "img": "../static/img/2.jpg",
                      "price":"¥34.0",
                      "owner":"herbertli",
                      "ownerIcon":"../static/img/mandatory.gif"
                    },
                    {
                      "title": "山东乳山虾仁",
                      "img": "../static/img/3.jpg",
                      "price":"¥33.0",
                      "owner":"rcai",
                      "ownerIcon":"../static/img/mandatory.gif"
                    },
                    {
                      "title": "厨房垃圾处理器",
                      "img": "../static/img/4.jpg",
                      "price":"¥50.0",
                      "owner":"candicewang",
                      "ownerIcon":"../static/img/mandatory.gif"
                    },
                    {
                      "title": "墨斗鱼",
                      "img": "../static/img/4.jpg",
                      "price":"¥50.0",
                      "owner":"larryli",
                      "ownerIcon":"../static/img/mandatory.gif"
                    }
                  ])
            });
          });
      }




  render(){
    return (
        <div className="is-content">
        <div className="container">
            <div id="globalMessages">
            </div>
            <div className="col-sm-12 facetNavigation">
    

                <Filter/>


            </div>
            <div className="col-sm-12">
                <div className="plp-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="istore-plp-grid clearfix">

                                {
                                    this.state.products.map((item, index) => {
                                        return <Product {...item}/>
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="is-plp-title">
                            <div className="bottom clearfix">
                                <div className="col-md-12">
                                    <div className="right">
                                    </div>
                                </div>
    
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

