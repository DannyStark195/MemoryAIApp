import { Link, useLocation } from "react-router-dom" 
import NavIcon from "./NavIcons.tsx";
import { PanelLeftCloseIcon,PanelLeftOpenIcon } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo.tsx";
function Navbar() {
  const navLinks = ["home", "explore", "chat", "library", "profile"];
  const location = useLocation();
  const currentPath = location.pathname.slice(1)
  const [navPanelOpen, setNavPanelOpen] = useState(true);

  function toggleNavPanel(){
    setNavPanelOpen(prev => !prev)
  }
  return (
    <div>

      <div className="flex justify-between p-6 md:hidden absolute bottom-0 left-0">
        {navLinks.map((link)=>(
            <Link to={`/${link}`}key={link}>
              <div className={`capitalize flex flex-col items-center ${currentPath === link? 'text-Accent':'text-Secondary-text dark:text-dark-Secondary-text'}`}>
                <NavIcon icon={link} fill={currentPath===link} size="21" />
                {link}
              </div>
            </Link>
        ))}
      </div>

      <div className={`hidden md:block ${navPanelOpen? 'w-50': '15'} h-screen border-r border-Surface dark:border-dark-Border dark:bg-dark-Surface px-4 py-10 text-md text-Primary-text dark:text-dark-Primary-text`}>
        <div className={`flex items-center gap-2 text-2xl font-semibold`}>
          <Logo classname="w-11"/>
          {navPanelOpen ? 'Memory':''}
        </div>
        <div onClick={toggleNavPanel} className={`my-6 cursor-pointer text-Primary-text dark:text-dark-Primary-text flex ml-3 ${navPanelOpen? 'justify-end':'justify-start'}`}>
          {navPanelOpen? <PanelLeftOpenIcon size={20} strokeWidth={1.5}/>: <PanelLeftCloseIcon size={20} strokeWidth={1.5}/>}
        </div>
        <div>
          {navLinks.map((link)=>(
            <Link to={`/${link}`} key={`${link}2`}>
              <div className={`flex gap-3 capitalize items-center px-2 py-2 mb-2 rounded-md hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover ${currentPath === link? 'text-Accent':'text-Primary-text dark:text-dark-Primary-text'}`}>
                <NavIcon icon={link} fill={currentPath===link} size="25" />
                {navPanelOpen? link: ''}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar