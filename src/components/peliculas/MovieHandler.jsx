import { Link } from 'react-router-dom';
import { React } from 'react';
import MovieCards from './MovieCardHandler';

function MovieHandled() {
  return (
    <div>
      <MovieCards />
      <ul>
        <Link to={`/search/movies`}>Busqueda</Link>
      </ul>
      <ul>
        <Link to={`/new/movies`}>Nueva Pelicula</Link>
      </ul>
      <ul>
        <Link to={`/delete/movies`}>Borrar Personajes</Link>
      </ul>
    </div>
  );
}
export default MovieHandled;
