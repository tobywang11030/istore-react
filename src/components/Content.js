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
        let category = this.props.match.params.category ? this.props.match.params.category : 'all';
        let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/' + category;
        console.log(callURL);
    

        axios.get(callURL)
          .then(res => {
            this.setState({
                products: res.data.products
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
                                        return <Product key = {index}{...item}/>
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

