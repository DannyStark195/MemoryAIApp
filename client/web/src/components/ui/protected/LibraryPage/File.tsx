import { HeartIcon, FileIcon, CaretRightIcon } from "@phosphor-icons/react"

type fileProps = {
        id: string,
        name: string,
        url?: string,
        category: "Personal" | "Work" | "School",
        created_at: string,
        fileType?: string,
        file?: {}
        favourite: boolean
    }
function File({fileProps}: {fileProps:fileProps}) {
  return (
    <div className="flex justify-between py-4 px-2 rounded-md cursor-pointer items-center mb-2 transition-all duration-300  hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <div className="flex gap-3 items-center">
            <div className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                <FileIcon size={26} weight="bold" />
            </div>
            <div>
                <h4 className="font-medium">{fileProps.name}</h4>
                <span className="text-sm text-Secondary-text dark:text-dark-Secondary-text">{fileProps.created_at}</span>
            </div>
        </div>

        <div className="cursor-pointer text-Secondary-text dark:text-dark-Secondary-text">
            <CaretRightIcon weight="bold" size={18}/>
        </div>
    </div>
  )
}

export default File