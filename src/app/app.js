import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import Core from './core/containers/core';
import './app.scss';

const history = createHistory();

ReactDOM.render(
	<Router history={history}>
		<Core />
	</Router>,
	document.querySelector('#root')
);