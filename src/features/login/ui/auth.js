import React from "react";
const renderUI = (login, setLogin, password, setPassword,error, handleLogin, handleRegister ) => {
    return (
        <div className='centered-container'>
            <div>
                <h2 style={{textAlign: "center"}}>Авторизация</h2>
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

                </div>
                <div className='section-container row'>
                    <button style={{width: "250px", justifyContent: "center"}} className='button'
                            onClick={handleLogin}>Войти
                    </button>
                    <button style={{width: "250px", justifyContent: "center"}} className='button'
                            onClick={handleRegister}>Регистрация
                    </button>
                </div>
                <div style={{textAlign: "center"}}>
                    {error && (
                        <div className="error-message">

                            {Object.keys(error).map(key => (
                                <span key={key}><br/> {error[key]}</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default renderUI;