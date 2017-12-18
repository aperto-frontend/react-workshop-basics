import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';

const history = createHistory();

import Core from './core/containers/core'

ReactDOM.render(
	<Router history={history}>
		<Core />
	</Router>,
	document.querySelector('#root')
);