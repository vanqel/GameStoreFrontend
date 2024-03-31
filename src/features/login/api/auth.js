import axios from 'axios';

const callApi = async (username, password,setError, history, index) => {
  
    const handleRedirect = () => {
      if (index == null){
        history.push(`/profile`);
      }else{
        history.push(`/product?index=${index}`)
      }
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
    localStorage.setItem('Refresh', tokenOutput.refresh)

    handleRedirect()
  } catch (error) {
    setError(error.response.data.errors)
  }
};

export default callApi;