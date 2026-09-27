import {  CameraIcon, FilePdfIcon, TextTIcon, WaveformIcon } from "@phosphor-icons/react"
import { useState } from "react"
import AddMemoryModal from "../AddMemoryModal";

function AddFile({style}:{style: string}) {
  const files:string[] = ["Photo", "Document", "Audio", "Note"] 
  const [addMemoryModalOpen, setAddMemoryModalOpen] = useState(false);
  return (
    <div>
      <div className={`rounded-lg bg-Background dark:bg-dark-Surface2 flex gap-1 shadow-Border shadow-lg dark:shadow-dark-Surface py-3 px-3 absolute top-[101%] right-0 lg:right-10 z-4 ${style}`}>
        {files.map(file =>(
          <div key={file} className={`text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors `}>
            {file === "Photo" && <div onClick={()=>{console.log(file)}} className="text-blue-500"><CameraIcon size={20} weight="bold"/></div>} 
            {file === "Document" && <div onClick={()=>{console.log(file)}} className="text-red-500"><FilePdfIcon size={20} weight="bold"/></div>}
            {file === "Audio" && <div onClick={()=>{console.log(file)}} className="text-pink-500"><WaveformIcon size={20} weight="bold"/></div>}
            {file === "Note" && <div onClick={()=>{console.log(file)}} className="text-Accent"><TextTIcon size={20} weight="bold"/></div>}
            {file}
          </div>
        ))}
      </div>
      {!addMemoryModalOpen?  <AddMemoryModal />:''}
     
    </div>
  )
}

export default AddFile