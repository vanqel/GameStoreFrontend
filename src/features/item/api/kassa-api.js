
import axios from "axios";

const getLink = async (index ) => {
    try {
        const response = await axios.get(`https://openstorebackendkotlin.onrender.com/kassa/${index}`);
        // return link
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
export default getLink;
