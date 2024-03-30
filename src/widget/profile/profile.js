import React from "react";

import Profile from "../../features/profile/ui/profile";
import Navbar from "../../features/main/ui/navbar";
import NavBarHome from "../../features/main/ui/navbar";

const WidgetHome = (props) => {
    return(
        <div className="home-container">
            <title>Профиль</title>
            <meta property="og:title" content="OpenStore:Profile" />
            <NavBarHome/>
            <Profile/>
        </div>
    )
}
export default WidgetHome