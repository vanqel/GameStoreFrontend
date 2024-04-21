
import '../../../app/home.css'
import axios from "axios";
const allOrders= async (category) => {
  try {
    var response = await axios.get(`https://openstorebackendkotlin.onrender.com/product`);
    if (category === "all" || category===null){
      response = await axios.get(`https://openstorebackendkotlin.onrender.com/product`);
    }
    else{
      response = await axios.get(`https://openstorebackendkotlin.onrender.com/product/category/${category}`);
    }
    if (response.status === 200) {
      const responseData = response.data;

      console.log('Данные успешно получены с сервера:', responseData);

      return responseData.map((product) => ({
        index: product.id,
        name: product.title,
        imageSrv: product.link,
        value: product.price
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
export default allOrders;
