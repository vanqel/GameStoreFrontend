import React from "react";
const renderUI = (login, setLogin,
                  password, setPassword,
                  email, setEmail,
                  phone, setPhone,
                  error,
                  handleRegister, handleLogin) => {
    return (
      <div className='centered-container'>
          <div>
              <h2 style={{textAlign: "center"}}>Регистрация</h2>
              <br/>
              <div className="column-container" style={{height: "50px"}}>
                  <input className='home-textinput' style={{margin: 0.5 + '%'}}
                         type="login"
                         placeholder="Логин"
                         value={login}
                         onChange={(e) => setLogin(e.target.value)}
                  />
                  <input className='home-textinput' style={{margin: 0.5 + '%'}}
                         type="password"
                         placeholder="Пароль"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                  />

                  <input className='home-textinput' style={{margin: 0.5 + '%'}}
                         type="text"
                         placeholder="Почта"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                  />
                  <input className='home-textinput' style={{margin: 0.5 + '%'}}
                         type="text"
                         placeholder="Телефон"
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                  />

              </div>
              <div className='section-container row' >
                  <button style={{width: "250px", justifyContent: "center"}} className='button' onClick={handleRegister}>
                      Зарегистрироваться
                  </button>
                  <button style={{width: "250px", justifyContent: "center"}} className='button' onClick={handleLogin}>
                      Войти
                  </button>
              </div>
              <div style={{textAlign:"center"}}>
                  {error && (
                      <div className="error-message">

                              {Object.keys(error).map(key => (
                                  <span key={key}><br/> {key}:{error[key]}</span>
                              ))}
                      </div>
                  )}
              </div>
          </div>
      </div>
    );
};

export default renderUI;