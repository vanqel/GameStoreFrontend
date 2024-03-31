const register = async (username, password, email, phone, setError, history, index) => {
  const handleRedirect = () => {
    if (index == null) {
      history.push(`/profile`);
    } else {
      history.push(`/product?index=${index}`);
    }
  };

  try {
    const response = await axios.post('http://localhost:8080/user/register', {
      "username": username,
      "password": password,
      "email": email,
      "phone": phone
    }, {
      withCredentials: true,
      credentials: 'include'
    });

    handleRedirect();
  } catch (error) {
    if (error.response && error.response.data) {
      setError(error.response.data.errors);
    } else {
      // Handle the case where error.response or error.response.data is undefined
      setError({}); // Or any default error object
    }
  }
};
export default register;