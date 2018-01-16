import React, { Component, Fragment } from 'react';
import Section from '../core/components/section/section';
import { movieService, Teaser } from '../shared';

export default class Home extends Component {
	state = {
		topRated: []
	};

	async componentDidMount() {
		try {
			const data = await movieService.getTopRated();

			this.setState(() => ({
				topRated: data.results
			}))
		} catch (err) {
			console.log('Error in getting files for Home page!');
		}
	}

	render() {
		return (
			<Fragment>
				<Section headline="Top Rated Movies">
					<div className="teasers is-grid-collapsed is-grid-row is-equal-height">
						{teasers(this.state.topRated)}
					</div>
				</Section>
			</Fragment>
		)
	}
}

/**
 * Partial Functions
 */
function teasers(teasers) {
	return teasers.map(teaser => (
		<div key={teaser.id} className="is-grid-col is-col-tablet-s-4">
			<Teaser title={teaser.title} poster_path={teaser.poster_path} overview={teaser.overview}/>
		</div>
	))
}