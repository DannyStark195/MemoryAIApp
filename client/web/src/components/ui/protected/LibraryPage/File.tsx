import { HeartIcon, FileIcon } from "@phosphor-icons/react"

type fileProps = {
        name: string,
        url?: string,
        category: "Personal" | "Work" | "School",
        created_at: string,
        fileType?: string,
        file?: {}
        favourite: boolean
    }
function File({fileProps:fileProps}) {
  return (
    <div className="flex justify-between p-2 cursor-pointer items-center mb-2 transition-all duration-200 hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <div className="flex gap-3 items-center">
            <div className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                <FileIcon size={26} weight="bold" />
            </div>
            <div>
                <h4 className="font-medium">{fileProps.name}</h4>
                <span className="text-sm">{fileProps.created_at} . {fileProps.category}</span>
            </div>
        </div>

        <div className="text-Accent cursor-pointer">
            <HeartIcon weight={fileProps.favourite? 'fill':'regular'} size={20}/>
        </div>
    </div>
  )
}

export default File