import { useState } from "react";
import { Link, useLocation } from "react-router-dom" 
function Navbar() {
  const navLinks = ["home", "explore", "library", "profile"];
  const location = useLocation();
  const currentPath = location.pathname
  const [glow, setGlow] = useState(false)
  return (
    <div>
       {navLinks.map((link)=>(
          <Link to={`/${link}`}key={link}>
            <div className={`text-Primary-text capitalize`}>
              {link}
            </div>
          </Link>
       ))}
    </div>
  )
}

export default Navbar