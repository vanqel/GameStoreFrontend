import React, {useEffect, useState} from "react";
import '../../../app/home.css'
import getProductOne from '../api/market-api'
import ItemPage from "../model/item-page";
import NotFound from "../../../pages/not_found/not-found"
import {useHistory} from "react-router-dom";
import getLink from "../api/kassa-api";

const GetProductsPage = ({index}) => {
    const history = useHistory();
    const [product, setProduct] = useState([]);
    const [link, setLink] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productData = await getProductOne(index);
                setProduct(productData);

                if (productData !== "error") {
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA", index)
                    const linkData = await getLink(index);
                    setLink(linkData);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                history.push("/");
            }
        };

        fetchProducts();
    }, [index]);



    const handleSubmit = async () => {
            if(link === "XUI"){
                history.push("/login")
            } else window.location.replace(link)


    }


    if (product === "error") {
        history.push("/")
        return (
            <div>
                <NotFound/>
            </div>
        );
    } else {
        return (
            <div className="section-container" style={{display:"flex", justifyContent:"center"}}>
                <ItemPage name={product.title} imageSrc={"https://openstorebackendkotlin.onrender.com" + product.link}
                          value={product.price} description={product.description} handleSubmit={handleSubmit}/>
            </div>
        );
    }

}
export default GetProductsPage;