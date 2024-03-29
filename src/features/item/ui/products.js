import React, { useEffect, useState } from "react";
import '../../../app/home.css'
import getProductOne from '../api/market-api'
import ItemPage from "../model/item-page";

const GetProductsPage = ({ index }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const product = await getProductOne(index);
        setProduct(product);
      };

      fetchProducts();
    }, [index]);

    return (
      <div className="section-container">
          <ItemPage name={product.title} imageSrc={"http://localhost:8080"+product.link} value={product.price} description={product.description} />
      </div>
    );
};
  export default GetProductsPage;