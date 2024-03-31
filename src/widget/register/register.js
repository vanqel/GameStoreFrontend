import React, { useState } from 'react';

import "../../app/home.css"
import {useHistory, useLocation} from 'react-router-dom';
import register from '../../features/register/api/register';
import renderUI from '../../features/register/ui/register';

const Register = () => {
    const history = useHistory()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const index = searchParams.get('index');
    const handleRegister = () => {
        register(login, password, email,phone,setError, history, index);
    };
    const handleLogin = () =>{
        history.push("/login")
    }

    return renderUI(
        login, setLogin,
        password, setPassword,
        email, setEmail,
        phone, setPhone,
        error,
        handleRegister,
        handleLogin);
};

export default Register;
