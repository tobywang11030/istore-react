import React, { Component } from 'react';
import Product from './Product';
import Filter from './Filter';

export default class Content extends Component {
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


                                <Product/>


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

