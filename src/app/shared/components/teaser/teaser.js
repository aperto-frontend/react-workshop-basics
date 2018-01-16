import React from 'react';
import './teaser.scss';

export default function Teaser({title, poster_path, overview}) {
	return (
		<div className="c-teaser">
			<h3 className="is-hidden-text">{title}</h3>
			<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="My image"/>

			<div className="teaser__content">
				<p>{overview}</p>
			</div>
		</div>
	)
}
