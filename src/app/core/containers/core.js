import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../../pages/home';
import Article from '../../pages/article';

// Styles
import './core.scss';

class Core extends Component {
	render() {
		return (
			<div className="page-wrapper">
				<Layout>
					<Route path="/" exact component={Home}/>
					<Route path="/article" component={Article}/>
				</Layout>
			</div>
		)
	}
}

export default Core;
