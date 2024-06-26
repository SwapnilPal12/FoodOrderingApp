import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [menu, setmenu] = useState(false);
  return (
    
    <div className="header">
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisgy your cravings and elevate dining experience, one delicious meal at a time.</p>
            <a href="#explore-menu" className="button">View Menu</a>
        </div>
    </div>
    
  )
}

export default Header
