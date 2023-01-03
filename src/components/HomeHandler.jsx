import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function HomeDisplay() {
  var token = window.localStorage.getItem('token');
  const [names, setName] = useState(['']);

  const authAxios = axios.create({
    withCredentials: true,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const getProductSearch = async () => {
    const response = await authAxios.get();
    console.log(response.data);
  };
  const register = (e) => {
    e.preventDefault();

    getProductSearch();
  };
  return (
    <header className='HeaderMain'>
      <img src={require('../assets/Imgs/LogoSaludos.png')} alt='Logo' />
      <table className='TableHeader'>
        <thead>
          <tr>
            <th>
              <Link className='link-styles' to={`/`}>
                Home
              </Link>
            </th>
            <th>
              <Link className='link-styles' to={`/Product`}>
                Productos
              </Link>
            </th>
            <th>
              <Link className='link-styles' to={`/auth/login`}>
                login
              </Link>
            </th>
            <th>
              <Link className='link-styles' to={`/auth/register`}>
                register
              </Link>
            </th>
          </tr>
        </thead>
      </table>
      <form className='TableTop' onSubmit={register}>
        Producto:
        <input value={names} onChange={(e) => setName(e.target.value)} />
        <Link to={`/search/product`}>
          <button className='button'>Busqueda</button>
        </Link>
      </form>
    </header>
  );
}
export default HomeDisplay;
