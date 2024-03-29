
import '../../../app/home.css'
import axios from "axios";

const getProductOne = async (index ) => {
  try {
    const response = await axios.get(`https://openstorebackendkotlin.onrender.com/product/${index}`);
    console.log(index)
    if (response.status === 200) {
      const responseData = response.data;

      console.log('Данные успешно получены с сервера:', responseData);

      return responseData;
    } else {
      console.error('Ошибка при получении данных с сервера.');
      return [];
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return [];
  }
};
export default getProductOne;
