import { FolderIcon, FolderPlusIcon } from "@phosphor-icons/react"
import AddFolderModal from "./AddFolderModal";
import CreateFolderModal from "./CreateFolderModal";
import { useState } from "react";

type NewFolderOptionsProps = {
  style?: string;
};

function NewFolderOptions({ style}: NewFolderOptionsProps) {
  const files:string[] = ["Create Folder", "Add Folder"] 
  const [addFolderModalOpen, setAddFolderModalOpen]  = useState(false);
  const [createFolderModalOpen, setCreateFolderModalOpen]  = useState(false)

  return (
    <div>
      <div className={`rounded-lg gap-1 bg-Background dark:bg-dark-Surface2 shadow-Border shadow-lg dark:shadow-none py-3 px-3 w-55 justify-between absolute top-[101%] right-0 lg:right-10 z-4 ${style}`}>
        {files.map(file =>(
          <div key={file} className={``}>
            {file === "Create Folder" && <div onClick={() => setCreateFolderModalOpen(true)} className="text-sm border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors"><FolderIcon size={20} weight="bold"/>{file}</div>}
            {file === "Add Folder" && <div onClick={() => setAddFolderModalOpen(true)} className="text-sm border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors"><FolderPlusIcon size={20} weight="bold"/>{file}</div>}
          </div>
        ))}
      </div>
      {
        addFolderModalOpen? 
        <AddFolderModal onClose={() => setAddFolderModalOpen(false)}/>: ''
      }
      {
        createFolderModalOpen? 
        <CreateFolderModal onClose={() => setCreateFolderModalOpen(false)}/>: ''
      }
    </div>
  )
}

export default NewFolderOptions
