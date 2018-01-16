import VeamsHttp from 'veams-services/lib/http';
const httpService = new VeamsHttp({
	type: 'json'
});


class MovieService {
	url = 'http://localhost:3000/api/movies/top-rated';
	http = httpService;

	/**
	 * Get Top Rated Movies
	 */
	async getTopRated() {
		try {
			return await this.http.get(this.url);
		} catch(err) {
			console.error('MovieService :: Error in getting top rated movies\n', err);
		}
	}
}

const movieService = new MovieService();

export default movieService;