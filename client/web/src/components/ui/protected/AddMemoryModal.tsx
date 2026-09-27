import { XIcon } from "@phosphor-icons/react";
import { useRef } from "react";

function AddMemoryModal() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    function closeAddMemoryModal(){
        
    }
    function handleChatInput (){
        const textarea = textareaRef.current
        if(!textarea) return

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
    }
  return (
     <div className="fixed top-0 left-0 right-0 z-999 h-full bg-black/80 w-full flex justify-center items-end pb-8">
        <div className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-6 w-150">
          <div className="mb-6 text-center relative">
            <h3 className="text-xl">New Memorii</h3>
            <div className="absolute -top-2 -right-8 cursor-pointer"><XIcon size={14}/></div>
          </div>
          <form action="">
             <div className="relative mb-4">
              {/* <div className="absolute top-3 left-3">
                <EnvelopeIcon size={18} />
              </div> */}
              <input type="email" placeholder="Title (e.g React cheet codes)" className="w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
              <p className="text-sm my-1 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>
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
                <p className="text-sm my-1 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>

            </div>
            <div></div>
            <button type="button" className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">Save Memorii</button>
          </form>
        </div>
      </div>
  )
}

export default AddMemoryModal