// movieApi.js
import { QUERYKEYS } from "consts/QUERYKEYS";
import { axiosInstance } from "./@core";
import { useQuery } from "react-query";
import axios from "axios";

const apiConfig = {
	// language: "ko-KR",
};

const queryConfig = { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 4 };

export const MovieApi = {
	// /movie/popular
	getPopularMovie(params) {
		return axiosInstance.get(`/movie/popular`, { params });
	},

	// /movie/now_playing
	getNowPlayingMovie(params) {
		return axiosInstance.get(`/movie/now_playing`, { params });
	},

	// /movie/top_rated
	getTopRatedMovie(params) {
		return axiosInstance.get(`/movie/top_rated`, { params });
	},

	// /search/movie
	getSearchMovie(params) {
		return axiosInstance.get(`/search/movie`, { params });
	},

	// /movie/{movie_id}
	getMovieDetail(movie_id, params) {
		return axiosInstance.get(`/movie/${movie_id}`, { params });
	},

	// /movie/{movie_id}/video
	getMovieVideo(movie_id, params) {
		return axiosInstance.get(`/movie/${movie_id}/videos`, { params });
	},

	// /movie/{movie_id}/credits
	getMovieCredits(movie_id, params) {
		return axiosInstance.get(`/movie/${movie_id}/credits`, { params });
	},

	// /movie/{movie_id}/reviews
	getMovieReviews(movie_id, params) {
		const Params = {
			params: { api_key: process.env.REACT_APP_TOKEN, ...params },
		};
		return axios.get(
			`https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
			Params,
		);
	},

	// /movie/{movie_id}/images
	getMovieImages(movie_id, params) {
		const Params = {
			params: { api_key: process.env.REACT_APP_TOKEN, ...params },
		};
		return axios.get(
			`https://api.themoviedb.org/3/movie/${movie_id}/images`,
			Params,
		);
	},

	// /movie/upcoming
	getUpcoming(params) {
		return axiosInstance.get(`/movie/upcoming`, { params });
	},

	// /search/여러가지
	getSearch(criterion, params) {
		return axiosInstance.get(`/search/${criterion}`, { params });
	},
};

export const CacheUtils = {
	cachePopularMovie: page => {
		return useQuery(
			[QUERYKEYS.MOVIE_POPULAR],
			() => MovieApi.getPopularMovie({ ...apiConfig, page }),
			queryConfig,
		);
	},
	cacheNowPlayingMovie: page => {
		return useQuery(
			[QUERYKEYS.MOVIE_NOWPLAYING],
			() => MovieApi.getNowPlayingMovie({ ...apiConfig, page }),
			queryConfig,
		);
	},
	cacheTopRatedMovie: page => {
		return useQuery(
			[QUERYKEYS.MOVIE_TOPRATED],
			() => MovieApi.getTopRatedMovie({ ...apiConfig, page }),
			queryConfig,
		);
	},
	cacheMovieDetail: (movie_id, page) => {
		return useQuery(
			[QUERYKEYS.MOVIE_DETAIL, movie_id],
			() => MovieApi.getMovieDetail(movie_id, { ...apiConfig, page }),
			queryConfig,
		);
	},
	cacheUpcomingMovie: page => {
		return useQuery(
			[QUERYKEYS.MOVIE_UPCOMING],
			() => MovieApi.getUpcoming({ ...apiConfig, page }),
			queryConfig,
		);
	},
	// cacheSearch: (criterion, query, page) => {
	// 	return useQuery(
	// 		["get/upcoming", criterion],
	// 		() => MovieApi.getSearch(criterion, { page, query }),
	// 		queryConfig,
	// 	);
	// },
};
