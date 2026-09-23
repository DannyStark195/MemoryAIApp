import { CaretRightIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

type settingsCardPProps ={
    icon: React.ReactElement
    text: string,
    link?: string
}
function SettingsCard({icon, text, link}:settingsCardPProps) {
  return (
    <div className="">
        <Link to={`${link}`}>
            <div className="flex justify-between w-full cursor-pointer hover:bg-Surface dark:hover:bg-dark-Surface duration-300 transition-all py-4 px-1 rounded-md">
                <div className="flex gap-2 ">
                    <div className="text-Accent">
                        {icon}
                    </div>
                    {text}
                </div>
                <div className="">
                    {/* <CaretRightIcon size={12}/> */}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default SettingsCard