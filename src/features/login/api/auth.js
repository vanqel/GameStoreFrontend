import axios from 'axios';

const callApi = async (username, password, history) => {
  
    const handleRedirect = () => {
      history.push(`/profile`);
    };

  try {
    const response = await axios.post('https://openstorebackendkotlin.onrender.com/auth/login', { username, password }, {
      withCredentials: true, // Include cookies in the request
      credentials: 'include' // Save cookies that come in the response
    });
    const { userOutput, tokenOutput } = response.data;
    localStorage.setItem('username', userOutput.username);
    localStorage.setItem('id', userOutput.id);
    localStorage.setItem('roles', JSON.stringify(userOutput.roles));
    localStorage.setItem('Access', tokenOutput.access)

    handleRedirect()
  } catch (error) {
    console.error('Ошибка при входе:', error);
  }
};

export default callApi;