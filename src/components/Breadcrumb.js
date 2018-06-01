import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import $ from 'jquery';


// https://github.com/icd2k3/react-router-breadcrumbs-hoc

// breadcrumbs can be any type of component or string

const UserBreadcrumb = ({ match }) =>{
  console.log(match)
  return <span>{getProductName(match.params.pid)}</span>;
}

// define some custom breadcrumbs for certain routes (optional)
const routes = [
  { path: '/detail/:pid', breadcrumb: UserBreadcrumb },
  { path: '/category', breadcrumb: null },
  { path: '/detail', breadcrumb: null },
  { path: '/', breadcrumb: '主页' },
  { path: '/carts', breadcrumb: '购物车' },
  { path: '/login', breadcrumb: '登录' },
];

function getProductName(id) {
  let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/detail/' + id;
  console.log(callURL); 
  let productName;
  $.ajax({    
    type : "get",    
    url : callURL,     
    async : false,    
    success : function(data){    
      productName = data.product.title;   
    }    
  });  

  return productName;
}

// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }) => (

	
	<div id="breadcrumb" className="breadcrumb">
		<ul className="clearfix">
				{breadcrumbs.map((breadcrumb, index) => (
				
					<li key={breadcrumb.key}>
							<NavLink to={breadcrumb.props.match.url}>
								{breadcrumb}
							</NavLink>
							{(index < breadcrumbs.length - 1) && <i> > </i>}
					</li>

				))}
		</ul>

	</div>

);

export default withBreadcrumbs(routes)(Breadcrumbs);