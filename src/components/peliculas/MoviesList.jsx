import { useState, useEffect } from 'react';
import { urlProduct } from '../endpoints';
import axios from 'axios';

function useMovieList() {
  const [movies, SetMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(urlProduct, { withCredentials: true });
    SetMovies(response.data);
  };

  return [movies];
}
export default useMovieList;
