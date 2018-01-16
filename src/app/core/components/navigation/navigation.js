import React, { Component, Fragment } from 'react';
import NavigationToggle from '../navigation-toggle/navigation-toggle';
import './navigation.scss';

export default class Navigation extends Component {
	state = {
		isOpen: false
	};

	handleClick = () => {
		this.setState(() => ({
			isOpen: !this.state.isOpen
		}))
	};

	render() {
		console.log('heighg: ', this.props.height);

		return (
			<div className="c-navigation">
				<NavigationToggle onClick={this.handleClick} isActive={this.state.isOpen}/>
				<nav className={`navigation__nav ${this.state.isOpen ? 'is-open' : 'is-closed'}`} style={{top: `${this.props.height}px` }}>
					<div className="is-container">
						<ul>
							<li>Action</li>
							<li>Comedy</li>
							<li>Family</li>
							<li>Thriller</li>
							<li>Science Fiction</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}

	getHeight() {

	}
}