
import '../../../app/home.css'
import axios from "axios";
const getProducts = async (index: number) => {
  try {
    let response = await axios.get(`https://openstorebackendkotlin.onrender.com/product/${index}`);

    if (response.status === 200) {
      const responseData = response.data;

      console.log('Данные успешно получены с сервера:', responseData);

      return responseData.map((product) => ({
        name: product.title,
        description: product.description,
        imageSrv: product.link,
        value: product.price,
      }));
    } else {
      console.error('Ошибка при получении данных с сервера.');
      return [];
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return [];
  }
};
export default getProducts;
