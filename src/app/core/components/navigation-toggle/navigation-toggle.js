import React, { Fragment } from 'react';
import './navigation-toggle.scss';

export default function NavigationToggle({ onClick, isActive = false }) {
	const activeClass = isActive ? 'is-active' : 'is-inactive';

	return (
		<Fragment>
			<div className={`c-navigation-toggle is-elastic ${activeClass}`}
			     tabIndex="0"
			     aria-label="Menu"
			     role="button"
			     aria-controls="navigation"
			     onClick={onClick}>
				<div className="navigation-toggle__box">
					<div className="navigation-toggle__inner"></div>
				</div>
			</div>
		</Fragment>
	)
}
