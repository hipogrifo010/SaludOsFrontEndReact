import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function HomeDisplay() {
  var token = window.localStorage.getItem('token');
  const [names, setName] = useState(['']);
  const [product, setProduct] = useState(['']);
  const authAxios = axios.create({
    withCredentials: true,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const getProductSearch = async () => {
    const response = await authAxios.get();
    console.log(response.data);
    setProduct(response.data);
  };
  const register = (e) => {
    e.preventDefault();

    getProductSearch();
  };
  return (
    <header className='HeaderMain'>
      <h1>Aqui Va una Imagen</h1>
      <table className='TableHeader'>
        <thead>
          <tr>
            <th>
              <Link
                to={`/`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}>
                Home
              </Link>
            </th>
            <th>
              <Link
                to={`/Product`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}>
                Productos
              </Link>
            </th>
            <th>
              <Link
                to={`/auth/login`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}>
                login
              </Link>
            </th>
          </tr>
        </thead>
      </table>
      <form
        style={{
          display: 'flex',
          width: '400px',
          textAlign: 'center',
          height: '100%',
          alignContent: 'center',
          textJustify: 'center',
          margin: '0 auto',
        }}
        className='TablePage'
        onSubmit={register}>
        Busqueda de Producto:
        <input
          style={{
            display: 'flex',
            width: '100px',
            height: '15px',
            margin: '4px',
            alignContent: 'center',
          }}
          value={names}
          onChange={(e) => setName(e.target.value)}
        />
        <Link to={`/search/product`}>
          <button
            style={{
              display: 'flex',
              width: '110px',
              margin: '4px',
              alignContent: 'center',
            }}>
            Busqueda
          </button>
        </Link>
      </form>
    </header>
  );
}
export default HomeDisplay;
