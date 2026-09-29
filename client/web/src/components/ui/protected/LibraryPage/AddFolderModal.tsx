import { XIcon } from "@phosphor-icons/react";

type AddFolderModalProps = {
  onClose: () => void;
};

function AddFolderModal({ onClose }: AddFolderModalProps) {
    
  return (
     <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-new-memory-folder"
        onClick={onClose} className="fixed inset-0 z-999 bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <div onClick={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <div className="mb-6 text-center relative">
            <h3 className="text-xl" id="add-new-memory-folder">New Folder</h3>
            <button type="button" onClick={onClose} aria-label="Close add memory folder modal" className="absolute -top-2 -right-8 cursor-pointer"><XIcon size={14}/></button>
          </div>
            
           <div>
            <h4 className="text-center mb-4">Photos</h4>
           </div>
            <div className="">
              <button type="button" className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Save Folder</button>
            </div>
        </div>
      </div>
  )
}

export default AddFolderModal
