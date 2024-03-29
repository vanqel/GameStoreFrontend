import React from "react"
import '../../app/home.css'
import NavBarHome from "../../features/main/ui/navbar.js"
import GetProductsCard from "../../features/market/ui/products.js"
import SectionHeading from "../../features/main/model/section-heading.js"
import { useLocation } from 'react-router-dom';

const WidgetMarket = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  return(
    <div className="home-container">

    <NavBarHome/>
    <div className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading={`Категория: ${category}`}
              subtitle="Выберите подходящее"
            ></SectionHeading>
      </div>
    </div>
    <GetProductsCard category = {`${category}`} />
    </div>
  )
}
export default WidgetMarket