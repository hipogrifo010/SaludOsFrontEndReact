import { React, useState } from 'react';
import { urlAuth } from './endpoints';
import { Watch } from 'react-loader-spinner';
import axios from 'axios';

function RegisterPost() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        urlAuth + `/register`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log(token);
    } catch (error) {
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
            style={{
              display: 'flex',
              width: '80%',
              height: 'auto',
              margin: 'auto',
              alignContent: 'start',
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='email'
          />
        </label>
        <label>
          password :
          <input
            style={{
              display: 'flex',
              width: '80%',
              height: 'auto',
              margin: 'auto',
              alignContent: 'start',
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='text'
            placeholder='password'
          />
        </label>
      </form>
      <p className='Text'>
        Introduce los valores"(puedes agregar uno o mas a la vez , @nova321S)"
      </p>
      <button onClick={register}>
        {' '}
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
          'REGISTER'
        )}
      </button>
    </div>
  );
}

export default RegisterPost;
