import { XIcon } from "@phosphor-icons/react";
import { useRef } from "react";

type AddMemoryModalProps = {
  onClose: () => void;
};

function AddMemoryModal({ onClose }: AddMemoryModalProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    function handleChatInput (){
        const textarea = textareaRef.current
        if(!textarea) return

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
    }
  return (
     <div onClick={onClose} className="fixed inset-0 z-999 bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <div onClick={(event) => event.stopPropagation()} className="bg-Surface dark:bg-dark-Surface rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <div className="mb-6 text-center relative">
            <h3 className="text-xl">New Memorii</h3>
            <button type="button" onClick={onClose} aria-label="Close add memory modal" className="absolute -top-2 -right-8 cursor-pointer"><XIcon size={14}/></button>
          </div>
          <form action="">
             <div className="relative mb-4">
              {/* <div className="absolute top-3 left-3">
                <EnvelopeIcon size={18} />
              </div> */}
              <input type="email" placeholder="Title (e.g React cheet codes)" className="w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
              <p className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>
            </div>
            <div className="mb-4">
                <textarea 
                    name="" id=""
                    placeholder="Memory content. Brief description of the memory"
                    className="max-h-50 min-h-20 text-sm overflow-y-auto resize-none w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"
                    onInput={handleChatInput}
                    ref={textareaRef}
                    rows={1}
                >

                </textarea>
                <p className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>

            </div>
            <div className="flex gap-3">
              <button type="button" className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Save Memorii</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default AddMemoryModal
