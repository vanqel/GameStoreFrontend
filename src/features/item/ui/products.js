import React, { useEffect, useState } from "react";
import '../../../app/home.css';
import getProductOne from '../api/market-api';
import ItemPage from "../model/item-page";
import NotFound from "../../../pages/not_found/not-found";
import { useHistory } from "react-router-dom";
import InfiniteLoading from "../../loading/ui/Loader";
const GetProductsPage = ({ index }) => {
    const history = useHistory();
    const [product, setProduct] = useState(null);
    const [link, setLink] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProductOne(index, setLink);
                setProduct(productData);


            } catch (error) {
                console.error("Error fetching products:", error);
                history.push("/");
            }
        };

        fetchData();
    }, [index]);

    const handleSubmit = () => {
        console.log(link)
        if (link === index) {
            history.push(`/login?index=${index}`);
        } else {
            window.location.replace(link);
        }
    };

    if (product === "error") {
        history.push("/");
        return (
            <div>
                <NotFound />
            </div>
        );
    }

        return (
            <div>
                {!product && (
                    <div>
                        <InfiniteLoading />
                    </div>
                )}
                {product && (
                    <div>
                        <div className="section-container" style={{display: "flex", justifyContent: "center"}}>
                            <ItemPage name={product.title}
                                      imageSrc={product.link ? `https://openstorebackendkotlin.onrender.com${product.link}` : ''}
                                      value={product.price} description={product.description}/>

                        </div>
                        {(link != null) && (
                            <div style={{justifyContent:"center", display:"flex", textAlign:"center"}}>
                                <button className="button" onClick={handleSubmit}>Купить</button>
                            </div>
                        )}
                    </div>)
                }

            </div>
        );

};

export default GetProductsPage;
