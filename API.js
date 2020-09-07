import axios from "axios";

const TMDB_KEY = "a2b8d720c4a07aaa524073dfe98190a9";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, params = {}) => {
  try {
    const {
      data: { results },
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () =>
    getAnything("/movie/now_playing", { language: "ko", region: "kr" }),
  popular: () =>
    getAnything("/movie/popular", { language: "ko", region: "kr" }),
  upcoming: () =>
    getAnything("/movie/upcoming", { language: "ko", region: "kr" }),
  search: (query) =>
    getAnything("/search/movie", { query, language: "ko", region: "kr" }),
  movie: (id) => getAnything(`/movie/${id}`),
  discover: () =>
    getAnything("/discover/movie", { language: "ko", region: "kr" }),
};

export const tvApi = {
  today: () => getAnything("/tv/airing_today", { language: "ko" }),
  thisWeek: () => getAnything("/tv/on_the_air", { language: "ko" }),
  topRated: () => getAnything("/tv/top_rated", { language: "ko" }),
  popular: () => getAnything("/tv/popular", { language: "ko" }),
  search: (query) => getAnything("/search/tv", { language: "ko", query }),
  show: (id) => getAnything(`/tv/${id}`, { language: "ko" }),
};

export const apiImage = (path) => `https://image.tmdb.org/t/p/w500${path}`;
