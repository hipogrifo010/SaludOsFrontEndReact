import { React, useState } from 'react';
import { urlAuth } from './endpoints';
import axios from 'axios';

function LoginPost() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const insert = async (e) => {
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
      <form className='FormVersion1'>
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
      <p>
        Introduce los valores"(puedes agregar uno o mas a la vez , @nova321S)"
      </p>
      <button onClick={insert}>Crear Nuevo!</button>
    </div>
  );
}

export default LoginPost;
