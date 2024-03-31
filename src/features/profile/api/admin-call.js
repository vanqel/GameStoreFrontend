import axios from "axios";

async function getAuth() {
    try {
        const response = await axios.get("https://openstorebackendkotlin.onrender.com/useroperations/my", {
            withCredentials: true, // Set withCredentials to true to include cookies
            credentials: 'include', // Attach all cookies to the request
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`,
                'Refresh' : `Refresh ${localStorage.getItem('Refresh')}`
            }
        });
        const responseData = response.data;

        if (response.status === 200 && responseData.auth.includes("ADMIN")) {
            console.log("ADMIN")
            return true;
        } else {
            console.error("ADMIN");
            return false;
        }
    } catch (error) {
        return false;
    }
}

export default getAuth;