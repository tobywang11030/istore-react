import React from 'react';
import { NavLink } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';


// https://github.com/icd2k3/react-router-breadcrumbs-hoc

// breadcrumbs can be any type of component or string
const UserBreadcrumb = ({ match }) =>
  <span>{match.params.userId}</span>; // use match param userId to fetch/display user name

// define some custom breadcrumbs for certain routes (optional)
const routes = [
	// { path: '/category/:categoryId', breadcrumb: UserBreadcrumb },
  { path: '/', breadcrumb: 'Home' },
];

// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }) => (

	
	<div id="breadcrumb" class="breadcrumb">
		<ul class="clearfix">
				{breadcrumbs.map((breadcrumb, index) => (
				
					<li key={breadcrumb.key}>
						<a>
							{console.log('---------',breadcrumb)}
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