import { FolderSimpleIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { type FolderType } from "../../../../types/model.ts"

function Folder({name, files}: FolderType) {
  return (
    <Link to={`folder/${name}`}>
      <div className="relative px-6 py-4 rounded-md w-full flex justify-between items-center mb-2 transition-all duration-300 cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface2">
                <div className="flex gap-4">
                    <div className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                        <FolderSimpleIcon size={32} weight="fill" />
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <span className="text-sm">{files.length}  memories</span>
                    </div>
                </div>

        </div>
    </Link>
  )
}

export default Folder
