import { urlProduct } from '../endpoints';
import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { Watch } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [pages, setPages] = useState(['1']);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const response = await authAxios.get(urlProduct + `?page=${pages} `);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <div>
      <div className='TableHigh'>
        {loading ? (
          <Watch
            height='80'
            width='80'
            radius='48'
            color='#1d61d7'
            ariaLabel='watch-loading'
            wrapperClassName='Watcher'
            visible={true}
          />
        ) : (
          <table className='TableLow'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Compañia</th>
                <th>Droga</th>
                <th>Formato</th>
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
        )}
      </div>
      <div>
        <form className='Forms' onSubmit={register}>
          Pagina:
          <input value={pages} onChange={(e) => setPages(e.target.value)} />
          <button className='button' onClick={register}>
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
