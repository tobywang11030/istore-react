import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
     
import Breadcrumbs  from 'react-router-dynamic-breadcrumbs';   
  
/**
*  Create routes mapping
*  
*  All dynamic params will display automatically.
*  not that even though '/users/:id' route is not in configuration file, 
*  it's corresponding link it will be displayed as the value of ':id'
*/
const routes = {
	'/': '首页',
	'/category': '全部商品',
   
};
	
// https://www.npmjs.com/package/react-router-dynamic-breadcrumbs

export default class Breadcrumb extends Component {

  render() {
	
    return (
			<div className="container">
				<div id="breadcrumb" className="breadcrumb">

						<Router>
								<Breadcrumbs mappedRoutes={routes} />
						</Router>
					
				</div>
			</div>
    );
  }
}
 