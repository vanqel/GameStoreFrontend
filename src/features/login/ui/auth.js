import React from "react";

const renderUI = (email, setEmail, password, setPassword, handleLogin, handleLogout) => {
    return (
      <div className='centered-container'>
        <div className='selection-container home-container'>
          <h2>Форма входа</h2>
          <input className='home-textinput' style={{margin: 0.5 + '%'}}
            type="login"
            placeholder="Логин"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='home-textinput' style={{margin: 0.5 + '%'}}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='section-container row'>
            <button className='button' onClick={handleLogin}>Войти</button>
            <button className='button' onClick={handleLogout}>Выйти</button>
          </div>
        </div>
      </div>
    );
  };

  export default renderUI;