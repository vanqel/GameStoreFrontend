import React from "react"
import '../../app/home.css'
import NavBarHome from "../../features/main/ui/navbar.js"
import GetProductsPage from "../../features/item/ui/products.js"
import SectionHeading from "../../features/main/model/section-heading.js"
import { useLocation } from 'react-router-dom';

const WidgetItemPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const index = searchParams.get('index');
  return(
    <div className="home-container">

    <NavBarHome/>
    <GetProductsPage index = {`${index}`} />
    </div>
  )
}
export default WidgetItemPage