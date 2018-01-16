import React, { Fragment, Component } from 'react';
import Navigation from '../components/navigation/navigation';
import Logo from '../components/logo/logo';
import './layout.scss';

export default class Layout extends Component {
	state = {
		height: 0
	};

	componentDidMount() {
		const height = this.header.offsetHeight;
		this.setState(() =>({
			height
		}))
	}

	render() {
		return (
			<Fragment>
				<header className="r-header" ref={(el) => this.header = el}>
					<div className="header__container is-container">
						<div className="r-header-left">
							<Logo />
						</div>

						<div className="r-header-right">
							<Navigation height={this.state.height}/>
						</div>
					</div>
				</header>
				<main className="r-main is-container ">
					{this.props.children}
				</main>
				<footer className="r-footer is-container ">
					<h2>Footer</h2>
				</footer>
			</Fragment>
		)
	}
}