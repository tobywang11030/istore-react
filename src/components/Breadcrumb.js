import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import $ from 'jquery';


// https://github.com/icd2k3/react-router-breadcrumbs-hoc

// breadcrumbs can be any type of component or string
const UserBreadcrumb = ({ match }) =>
  <span>{getProductName(match.params.pid)}</span>; // use match param userId to fetch/display user name

// define some custom breadcrumbs for certain routes (optional)
const routes = [
	{ path: '/detail/:pid', breadcrumb: UserBreadcrumb },
  { path: '/', breadcrumb: 'Home' },
];

function getProductName(id) {
  let callURL = 'https://easy-mock.com/mock/5b07d6d77bebfe1c7e53d20a/api/detail/' + id;
  console.log(callURL); 
  let productName;

  // axios.get(callURL)
  //   .then(res => {
  //     productName = res.data.product.title
  //   });
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
						<a>
							<NavLink to={breadcrumb.props.match.url}>
								{breadcrumb}
							</NavLink>
							{(index < breadcrumbs.length - 1) && <i> > </i>}
						</a>
					</li>

				))}
		</ul>

	</div>

);

export default withBreadcrumbs(routes)(Breadcrumbs);