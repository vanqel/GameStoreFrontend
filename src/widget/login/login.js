import React, { useState } from 'react';

import "../../app/home.css"
import { useHistory } from 'react-router-dom';
import callApi from '../../features/login/api/auth';
import renderUI from '../../features/login/ui/auth';

const Auth = () => {
  const history = useHistory()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    callApi(login, password, history);
  };

  return renderUI(login, setLogin, password, setPassword, handleLogin);
};

export default Auth;
