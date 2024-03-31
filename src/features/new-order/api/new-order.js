import axios from "axios";

async function newOrder (formData, image) {
    try {

        const productResponse = await axios.post('https://openstorebackendkotlin.onrender.com/product', {
            "title": formData.get('title'),
            "description": formData.get('description'),
            "link": formData.get('linkDownload'),
            "category": formData.get('category'),
            "price": formData.get('price')
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`,
                'Refresh': `Refresh ${localStorage.getItem('Refresh')}`,
            },
        })

                const imageData = new FormData();
                imageData.append('img',image)
                console.log("img");
               await axios.put(`https://openstorebackendkotlin.onrender.com/product/${productResponse.data.id}/image`, imageData, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('Access')}`,
                        'Refresh': `Refresh ${localStorage.getItem('Refresh')}`,
                        'Content-Type': 'multipart/form-data',
                    }
                }


        )


    } catch (e){
        console.log(e)
    }


}

export default newOrder;