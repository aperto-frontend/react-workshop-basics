import React, {Fragment} from 'react';
import './layout.scss';

export default function Layout({children}) {
	return (
		<Fragment>
			<header className="r-header is-container">
				<h1 className="header__headline">My custom header</h1>
			</header>
			<main className="r-main is-container ">
				{children}
			</main>
			<footer className="r-footer is-container ">
				<h2>Footer</h2>
			</footer>
		</Fragment>
	)
}