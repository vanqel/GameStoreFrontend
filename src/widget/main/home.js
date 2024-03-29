import React from "react"
import '../../app/home.css'
import NavBarHome from "../../features/main/ui/navbar.js"
import BodyHome from "../../features/main/ui/body.js"

const WidgetHome = (props) => {
  return(
    <div className="home-container">
      <title>OpenStore</title>
      <meta property="og:title" content="OpenStore" />
    <NavBarHome/>
    <BodyHome/>
    </div>
  )
}
export default WidgetHome