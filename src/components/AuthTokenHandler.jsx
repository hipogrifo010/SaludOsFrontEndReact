import axios from 'axios';


function userAuth() {
  const authAxios = {
    withCredentials: true,
  };
  return authAxios;
}
export default userAuth;
