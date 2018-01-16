import React from 'react';
import './section.scss';

export default function Section({ headline, children }) {
	return (
		<section className="c-section">
			<header className="section__header">
				<h2 className="section__headline">
					{headline}
				</h2>
			</header>

			<div className="section__content">
				{children}
			</div>

		</section>
	)
}
