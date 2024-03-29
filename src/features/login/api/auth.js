import axios from 'axios';

const callApi = async (username, password, history) => {
  
    const handleRedirect = () => {
      history.push(`/`);
    };

  try {
    const response = await axios.post('https://openstorebackendkotlin.onrender.com/auth/login', { username, password });
    const { userOutput } = response.data;
    localStorage.setItem('username', userOutput.username);
    localStorage.setItem('id', userOutput.id);
    localStorage.setItem('roles', JSON.stringify(userOutput.roles));

    handleRedirect()
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};

export default callApi;