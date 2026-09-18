import {  CameraIcon, FilePdfIcon, TextTIcon, WaveformIcon } from "@phosphor-icons/react"

function AddFile() {
  const files:string[] = ["Photo", "Document", "Audio", "Note"] 
  return (
    <div className="rounded-lg bg-Background dark:bg-dark-Surface2 flex gap-1 shadow-Border shadow-lg dark:shadow-dark-Surface py-3 px-3 absolute top-[101%] right-0 lg:right-10">
      {files.map(file =>(
        <div className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-4 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors">
          {file === "Photo" && <CameraIcon size={19}/>} 
          {file === "Document" && <FilePdfIcon size={19}/>}
          {file === "Audio" && <WaveformIcon size={19}/>}
          {file === "Note" && <TextTIcon size={19}/>}
          {file}
        </div>
      ))}
    </div>
  )
}

export default AddFile