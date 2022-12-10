import axios from 'axios';

function userAuth() {
  var token = window.localStorage.getItem('userstored');
  const authAxios = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return authAxios;
}
export default userAuth;
