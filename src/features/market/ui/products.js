import React, { useEffect, useState } from "react";
import ItemCard from "../model/item-card";
import '../../../app/home.css'
import getProducts from '../api/market-api'
import { element } from "prop-types";

const GetProductsCard = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const products = await getProducts(category);
        setProducts(products);
      };

      fetchProducts();
    }, [category]);
    return (
      <div className="section-container">
        {products.map((product) => (
          <ItemCard index={product.index} name={product.name} imageSrc={"https://openstorebackendkotlin.onrender.com"+product.imageSrv} value={product.value} />
        ))}
      </div>
    );
};
  export default GetProductsCard;