import axios from 'axios';

const register = async (username, password,email,phone,setError, history, index) => {

    const handleRedirect = () => {
      if (index == null){
        history.push(`/profile`);
      }else{
        history.push(`/product?index${index}`)
      }
    };

  try {
    const response = await axios.post('https://openstorebackendkotlin.onrender.com/user/register', {
      "username":username, "password":password, "email":email, "phone":phone }, {
      withCredentials: true, // Include cookies in the request
      credentials: 'include' // Save cookies that come in the response
    });

    handleRedirect()
  } catch (error) {
    setError(error.response.data.errors)
  }
};

export default register;