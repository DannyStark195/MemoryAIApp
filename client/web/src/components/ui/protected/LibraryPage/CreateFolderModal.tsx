import { XIcon } from "@phosphor-icons/react";
import { useToast } from "../../../../context/ToastContext";
type createFolderModalProps = {
  onClose: () => void;
};

function createFolderModal({ onClose }: createFolderModalProps) {
  const {showToast} = useToast();
  return (
     <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-new-memory-folder"
        onClick={onClose} className="fixed inset-0 z-999 bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <div onClick={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <div className="mb-6 text-center relative">
            <h3 className="text-xl" id="create-new-memory-folder">Create Folder</h3>
            <button type="button" onClick={onClose} aria-label="Close create memory folder modal" className="absolute -top-2 -right-8 cursor-pointer"><XIcon size={14}/></button>
          </div>
          <form action="">
             <div className="relative mb-4">
              <input type="text" placeholder="Title (e.g Programming or Technology)" className="w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
              <p className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>
            </div>
            
            <div className="flex gap-3">
              <button onClick={()=> {
                onClose()
                showToast({type: "error", message:"Folder created!"})}} type="button" className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Create Folder</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default createFolderModal
