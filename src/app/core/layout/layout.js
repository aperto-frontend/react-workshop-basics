import React from 'react';

export default function Layout({children}) {
	return (
		<div className="page-wrapper">
			<header><h1>My custom header</h1></header>
			<main>{children}</main>
			<footer><h2>Footer</h2></footer>
		</div>
	)
}