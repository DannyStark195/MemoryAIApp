import {HouseIcon, FolderOpenIcon, MagnifyingGlassIcon, OpenAiLogoIcon, UserGearIcon} from "@phosphor-icons/react";

type NavIconProps ={
    icon: string,
    fill: boolean,
    size?: string
}
function NavIcon({icon, fill, size}: NavIconProps){
    return (
        <div className="">
            {icon === "home" && <HouseIcon weight={fill? "fill":"light"} size={size}/>} 
            {icon === "explore" && <MagnifyingGlassIcon weight={fill? "bold": "light"} size={size}/>}
            {icon === "library" && <FolderOpenIcon weight={fill? "fill": "light"} size={size}/>}
            {icon === "chat" && <OpenAiLogoIcon weight={fill? "fill": "light"} size={size}/>}
            {icon === "settings" && <UserGearIcon  weight={fill? "fill": "light"} size={size}/>}
        </div>
    )
}

export default NavIcon