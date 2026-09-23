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
            <div className="flex justify-between w-full cursor-pointer border border-Surface2 dark:border-dark-Surface2 px-2 py-4">
                <div className="flex gap-2 ">
                    <div className="text-Accent">
                        {icon}
                    </div>
                    {text}
                </div>
                <div className="">
                    <CaretRightIcon size={12}/>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default SettingsCard