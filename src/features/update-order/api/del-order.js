
import '../../../app/home.css'
import axios from "axios";
const delProducts = async (index: number) => {
  try {
    let response = await axios.delete(`https://openstorebackendkotlin.onrender.com/product`, {
      data: {
        pid: index
      }
    });

    if (response.status === 200) {
      console.log('Данные успешно получены с сервера:', responseData);
      return true;
    } else {
      console.error('Ошибка при получении данных с сервера.');
      return false;
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return false;
  }
};
export default delProducts;
