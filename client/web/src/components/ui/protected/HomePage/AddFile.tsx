import { CameraIcon, FilePdfIcon, TextTIcon, WaveformIcon } from "@phosphor-icons/react"

type AddFileProps = {
  style: string;
  onAddMemory: () => void;
};

function AddFile({ style, onAddMemory }: AddFileProps) {
  const files:string[] = ["Photo", "Document", "Audio", "Note"] 

  function AddMemory(){
    onAddMemory()
  }
  return (
    <div>
      <div
       aria-label="Add memory options"
       className={`rounded-lg flex gap-1 bg-Background dark:bg-dark-Surface2 shadow-Border shadow-lg dark:shadow-none py-3 px-3 absolute right-0 lg:right-10 z-4 ${style}`}>
        {files.map(file =>(
          <div key={file} className={``}>
            {file === "Photo" && <button type="button" onClick={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors text-blue-500"><CameraIcon size={20} weight="bold"/>{file}</button>}
            {file === "Document" && <button type="button" onClick={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors text-red-500"><FilePdfIcon size={20} weight="bold"/>{file}</button>}
            {file === "Audio" && <button type="button" onClick={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors text-pink-500"><WaveformIcon size={20} weight="bold"/>{file}</button>}
            {file === "Note" && <button type="button" onClick={AddMemory} className="text-md border-Border flex flex-col items-center justify-center gap-2 py-2 px-2 rounded-lg cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface duration-200 transition-colors text-Accent"><TextTIcon size={20} weight="bold"/>{file}</button>}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddFile
