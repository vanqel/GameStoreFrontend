import React, { useState } from 'react';

import "../../app/home.css"
import {useHistory, useLocation} from 'react-router-dom';
import callApi from '../../features/login/api/auth';
import renderUI from '../../features/login/ui/auth';

const Auth = () => {
  const history = useHistory()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const index = searchParams.get('index');
  const handleLogin = () => {
    callApi(login, password,setError, history, index);
  };
  const handleRegister = () =>{
    history.push("/register")
  }

  return renderUI(login, setLogin, password, setPassword, error,handleLogin, handleRegister);
};

export default Auth;
