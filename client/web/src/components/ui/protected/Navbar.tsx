import { Link, useLocation } from "react-router-dom" 
import NavIcon from "./NavIcons.tsx";
function Navbar() {
  const navLinks = ["home", "explore", "chat", "library", "profile"];
  const location = useLocation();
  const currentPath = location.pathname.slice(1)
  console.log(currentPath)
  return (
    <div>
      <div className="flex justify-between md:hidden">
        {navLinks.map((link)=>(
            <Link to={`/${link}`}key={link}>
              <div className={`capitalize flex flex-col items-center ${currentPath === link? 'text-Accent':'text-Secondary-text dark:text-dark-Secondary-text'}`}>
                <NavIcon icon={link} fill={currentPath===link} size="21" />
                {link}
              </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar