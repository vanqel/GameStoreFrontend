import React, {useEffect, useState} from "react";
import '../../../app/home.css'
import getProductOne from '../api/market-api'
import ItemPage from "../model/item-page";
import NotFound from "../../../pages/not_found/not-found"
import {useHistory} from "react-router-dom";

const GetProductsPage = ({index}) => {
    const history = useHistory();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const product = await getProductOne(index);
            setProduct(product);
        };

        fetchProducts();
    }, [index]);

    if (product == "error") {
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
                          value={product.price} description={product.description}/>
            </div>
        );
    }

};
export default GetProductsPage;