import { FolderSimpleIcon, DotsThreeOutlineIcon } from "@phosphor-icons/react"
type folderProps = {
    name: string,
    files: {}[]
}

function Folder({name, files}: folderProps) {
  return (
    <div className="p-2 rounded-md w-full flex justify-between items-center mb-2 transition-all duration-200 cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <div className="flex gap-4">
            <div className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                <FolderSimpleIcon size={32} weight="fill" />
            </div>
            <div>
                <h4>{name}</h4>
                <span className="text-sm">{files.length}  memories</span>
            </div>
        </div>
        <div className="cursor-pointer">
            <DotsThreeOutlineIcon size={20} weight="fill" />
        </div>
    </div>
  )
}

export default Folder