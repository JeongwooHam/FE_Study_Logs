import axios from "axios";
import { useQuery } from "react-query";

const useFetchMoviesWithoutLanguage = (page, endpoint) => {
	async function fetchMovies(params) {
		const Params = {
			params: { api_key: process.env.REACT_APP_TOKEN, ...params },
		};
		return axios.get(`https://api.themoviedb.org/3/movie/${endpoint}`, Params);
	}

	return useQuery([`movies/${endpoint}`, page], () => fetchMovies({ page }), {
		keepPreviousData: true,
		staleTime: 0,
		refetchOnWindowFocus: false,
		retry: false,
	});
};
export default useFetchMoviesWithoutLanguage;
