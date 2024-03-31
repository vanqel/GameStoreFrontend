
import '../../../app/home.css'
import axios from "axios";
import getLink from "./kassa-api";

const getProductOne = async (index, setLink ) => {
  try {
    const response = await axios.get(`https://openstorebackendkotlin.onrender.com/product/${index}`);
    console.log(index)
    if (response.status === 200) {
      const responseData = response.data;
      const linkData = await getLink(index)
      if (linkData != null){
        setLink(linkData)
        console.log('Данные успешно получены с сервера:', responseData);
        console.log(linkData)
        return responseData;
      }
      else {
        return []
      }

    } else {
      console.error('Ошибка при получении данных с сервера.');
      return [];
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return "error";
  }
};
export default getProductOne;
