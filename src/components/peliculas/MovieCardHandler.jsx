import { Link } from 'react-router-dom';
import { React } from 'react';
import useMovieList from './MoviesList';
import { v4 as uuidv4 } from 'uuid';

function MovieCards() {
  const [data] = useMovieList();

  return (
    <div className='MovieCards'>
      {data.map((mov) => (
        <div key={uuidv4()}>
          <Link to={`/movies/${mov.titulo}`}>
            <li>{mov.titulo}</li>
          </Link>
          <ul>{mov.fechaDeCreacion}</ul>
          <img
            style={{ width: 200, height: 300 }}
            src={require('../Imgs/' + mov.imagen)}
            className='ImgMovie'
            alt='imagen'
          />
          <ul>{''}</ul>
        </div>
      ))}
    </div>
  );
}
export default MovieCards;
