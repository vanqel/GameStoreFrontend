
import axios from "axios";
import {useHistory} from "react-router-dom";

const getLink = async (index, history ) => {
    try {
        if (localStorage.getItem('Access') == null){
            return index
        }
        const response = await axios.get(`https://openstorebackendkotlin.onrender.com/kassa/${index}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`// Set the Authorization header with the token
            }
        });
        console.log("LOLOLOLOLOO")
        // return link
        if (response.status === 200) {
            const responseData = response.data;
            console.log('Данные успешно получены с сервера:', responseData);
            return responseData;
        } else {
            if(response.status === 403){
                return index;
            }
            else return null
        }


    } catch (error) {
        console.error('Произошла ошибка:', error);
        return [];
    }
};
export default getLink;
