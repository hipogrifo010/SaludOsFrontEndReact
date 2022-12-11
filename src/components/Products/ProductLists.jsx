import { urlProduct } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(['']);
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
    const response = await authAxios.get(urlProduct + `?=${pages} `);
    console.log(response.data);
    setProduct(response.data);
  };
  return (
    <div>
      <div>
        <ul>
          <Link to={`/search/product`}>Buscar Producto</Link>
        </ul>
        <ul className='List'>
          {product.map((ch) => (
            <div key={ch.id}>
              <p>Nombre de producto : {ch.productName}</p>
              <p>Nombre de la Compañia : {ch.company}</p>
              <p>Precio : {ch.price}</p>
              <p>Nombre de la Droga : {ch.drugBrand}</p>
              <p>Formato de Medicamento : {ch.typeOfMedication}</p>
            </div>
          ))}
        </ul>
        <form onSubmit={register}>
          <label>
            Pagina:
            <input value={pages} onChange={(e) => setPages(e.target.value)} />
          </label>
        </form>
        <ul>
          <Link to={`/new/product`}>Nuevo Producto</Link>
        </ul>
        <button onClick={register}>Buscar Pagina!</button>
        <ul>
          <Link to={`/delete/product`}>Borrar Producto</Link>
        </ul>
      </div>
    </div>
  );
}

export default ProductList;
