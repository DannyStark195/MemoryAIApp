import { FilePlusIcon, HeartIcon, TrashIcon } from "@phosphor-icons/react"

type folderOptionsProps ={
    folderName?: string,
    style: string
}

function FolderOptions({folderName, style}: folderOptionsProps) {
    console.log(folderName)
  return (
        <div className={`absolute rounded-md shadow-lg shadow-Border dark:shadow-dark-Surface p-2 ${style} right-0 top-[80%] z-50 bg-Background dark:bg-dark-Surface2 font-medium text-Accent`}>
            <div className="flex gap-1 items-center p-1 rounded-md hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover cursor-pointer">
                <FilePlusIcon size={16} weight="fill"/>
                Add file
            </div>
            <div className="flex gap-1 items-center p-1 rounded-md hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover cursor-pointer">
                <HeartIcon size={16} weight="fill"/>
                Add to favourite
            </div>
            <div className="flex gap-1 items-center p-1 rounded-md hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover cursor-pointer">
                <TrashIcon size={16} weight="fill"/>
                Delete folder
            </div>
        </div>
  )
}

export default FolderOptions