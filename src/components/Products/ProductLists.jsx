import { urlProduct } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(['1']);

  var token = window.localStorage.getItem('token');
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const authAxios = axios.create({
    withCredentials: true,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  const register = (e) => {
    e.preventDefault();

    getProducts();
  };

  const getProducts = async () => {
    const response = await authAxios.get(urlProduct + `?page=${pages} `);
    console.log(response.data);
    setProduct(response.data);
  };
  return (
    <div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre de producto</th>
              <th>Nombre de la Compañia</th>
              <th>Nombre de la Droga</th>
              <th>Formato de Medicamento</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {product.map((ch) => (
              <tr key={ch.id}>
                <td>{ch.productName}</td>
                <td>{ch.company}</td>
                <td>{ch.drugBrand}</td>
                <td>{ch.typeOfMedication}</td>
                <td>{ch.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <form className='TablePage' onSubmit={register}>
          Pagina:
          <input
            style={{
              display: 'flex',
              width: '50%',
              margin: 'auto',
              alignContent: 'center',
            }}
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <button
            style={{
              display: 'flex',
              width: '110px',
              margin: 'auto',
              alignContent: 'center',
            }}
            onClick={register}>
            Buscar Pagina!
          </button>
        </form>
        <ul>
          <Link to={`/new/product`}>Nuevo Producto</Link>
        </ul>
        <ul>
          <Link to={`/delete/product`}>Borrar Producto</Link>
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
