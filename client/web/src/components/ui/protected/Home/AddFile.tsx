import {  CameraIcon, FilePdfIcon, 
  ImageIcon,
  TextTIcon, WaveformIcon 
} from "@phosphor-icons/react"

function AddFile() {
  const files:string[] = ["Photo", "Document", "Audio", "Note"] 
  return (
    <div>
      {files.map(file =>(
        <div>
          {file === "Photo" && <CameraIcon/>} 
          {file === "Document" && <FilePdfIcon/>}
          {file === "Audio" && <WaveformIcon/>}
          {file === "Note" && <TextTIcon/>}
        </div>
      ))}
    </div>
  )
}

export default AddFile