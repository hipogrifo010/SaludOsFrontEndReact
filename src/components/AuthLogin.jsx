import { React, useState } from 'react';
import { urlAuth } from './endpoints';
import axios from 'axios';

function LoginPost() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.log(error.data);
    }
  };
  return (
    <div>
      <form
        className='TablePage'
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
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default LoginPost;
