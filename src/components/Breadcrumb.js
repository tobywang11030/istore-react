import React, { Component } from 'react';
import axios from 'axios';
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

	
// https://www.npmjs.com/package/react-router-dynamic-breadcrumbs

export default class Breadcrumb extends Component {
	constructor(){
		super();
		this.state = {
			product: {}
		}
	}

	componentWillMount() {
		this.getProductByID();
	}

	getProductByID() { 
		let pid = this.props.location.pathname;
		let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api' + pid;
		console.log('aaaaaa', this.props,callURL);

		axios.get(callURL)
			.then(res => {
				this.setState({
						product: res.data.product
				});
			});
	}

  render() {

		const routes = {
			'/': '首页',
			'/category': '全部商品',
			'/detail': '商品详情',
			'/detail/:pid': this.state.product.title
			 
		};
	
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
 