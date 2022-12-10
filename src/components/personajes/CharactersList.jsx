import { urlProduct } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const response = await axios.get(urlProduct, { withCredentials: true });
    console.log(response.data);
    setCharacters(response.data);
  };
  return (
    <div>
      <div>
        <ul>
          <Link to={`/search/characters`}>Busqueda</Link>
        </ul>
        <ul>
          {characters.map((ch) => (
            <div key={uuidv4()}>
              <Link to={`/characters/${ch.nombre}`}>
                {ch.nombre}
                {ch.image}
              </Link>
            </div>
          ))}
        </ul>
        <ul>
          <Link to={`/new/characters`}>Nuevo Personaje</Link>
        </ul>
        <ul>
          <Link to={`/delete/characters`}>Borrar Personajes</Link>
        </ul>
      </div>
    </div>
  );
}

export default CharacterList;
