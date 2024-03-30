import axios from "axios";

async function getOrders() {
    try {
        const response = await axios.get("https://openstorebackendkotlin.onrender.com/useroperations/my", {
            withCredentials: true, // Set withCredentials to true to include cookies
            credentials: 'include', // Attach all cookies to the request
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`// Set the Authorization header with the token
            }
        });

        if (response.status === 200) {
            const responseData = response.data;

            console.log("Response data:", responseData);

            return responseData.map((order) => ({
                invID: order.invID,
                product: order.product.title,
                status: order.status,
                link_download: order.link
            }));
        } else {
            console.error("Error: Failed to fetch data.");
            return null;
        }
    } catch (error) {
        console.error("Request error:", error);
        return [];
    }
}

export default getOrders;