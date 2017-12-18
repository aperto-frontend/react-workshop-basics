import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from '../layout/layout';
import Home from '../../pages/home';
import Article from '../../pages/article';

class Core extends Component {
	render() {
		return (
			<Layout>
				<h2>This is my main content</h2>
				<Route path="/" exact component={Home}/>
				<Route path="/article" component={Article}/>
			</Layout>
		)
	}
}

export default Core;
