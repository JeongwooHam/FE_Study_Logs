import { axiosInstance } from "apis/@core";
import { useQuery } from "react-query";

const useFetchMovies = (page, language, endpoint) => {
	async function fetchMovies(params) {
		const response = await axiosInstance.get(`/movie/${endpoint}`, {
			params,
		});
		return response.data;
	}

	return useQuery(
		[`movies/${endpoint}`, page],
		() => fetchMovies({ language, page }),
		{
			keepPreviousData: true,
			staleTime: 0,
			refetchOnWindowFocus: false,
			retry: false,
		},
	);
};
export default useFetchMovies;
