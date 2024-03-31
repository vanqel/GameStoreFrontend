import axios from "axios";

async function getMe(history) {
    try {
        const response = await axios.get("https://openstorebackendkotlin.onrender.com/auth/me", {
            withCredentials: true, // Set withCredentials to true to include cookies
            credentials: 'include', // Attach all cookies to the request
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`// Set the Authorization header with the token
            }
        });

        if (response.status === 200) {
            const responseData = response.data;

            console.log("Response data:", responseData);

            return responseData;
        } else {
            if(response.status === 403){
                localStorage.removeItem('username',);
                localStorage.removeItem('id');
                localStorage.removeItem('roles');
                localStorage.removeItem('Access')
                localStorage.removeItem('Refresh')
                history.push("/")
                return null
            }
            else return null;
        }
    } catch (error) {
        console.error("Request error:", error);
        return [];
    }
}

export default getMe;