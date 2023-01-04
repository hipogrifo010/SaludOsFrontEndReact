import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Watch } from 'react-loader-spinner';
import { urlAuth } from './endpoints';
import axios from 'axios';

function LoginPost() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        urlAuth + `/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token);
      navigate({
        pathname: '/',
      });
    } catch (error) {
      //deberia mandar a pagina con error 404 soft
      console.log(error.data);
    }
    setLoading(false);
  };
  return (
    <div>
      <form
        className='Forms'
        style={{
          display: 'flex',
          width: '360px',
          height: 'auto',

          position: 'relative',
        }}>
        <label>
          email:
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='email'
          />
        </label>
        <label>
          password :
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='password'
          />
        </label>
      </form>
      <p className='Text'>ingrese los valores</p>
      <button onClick={login} className='button'>
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
          'LOGIN'
        )}
      </button>
    </div>
  );
}

export default LoginPost;
