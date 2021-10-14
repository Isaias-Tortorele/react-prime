import axios from 'axios';

// filmes em cartaz
// https://api.themoviedb.org/3/movie/now_playing?api_key=0657451864caf76ab5b31d3b2b963c14&=pt-BR&page=1

export const key = '0657451864caf76ab5b31d3b2b963c14'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;