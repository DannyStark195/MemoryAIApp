import { useRef } from "react"
import {PaperPlaneIcon } from "@phosphor-icons/react"

function ChatInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    function handleChatInput (){
        const textarea = textareaRef.current
        if(!textarea) return

        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
    }
  return (
    <form action="">
        <div className="flex border bg-Background dark:bg-dark-Background border-Border dark:border-dark-Surface2 px-2 pt-1 pb-4 rounded-lg min-h-8">
            <textarea 
                name="" id=""
                placeholder=""
                className="max-h-50 text-sm overflow-y-auto resize-none outline-none w-[95%]"
                onInput={handleChatInput}
                ref={textareaRef}
                rows={1}
            >

            </textarea>
            <button
                type="button"
                className="absolute bottom-1.5 right-2 rounded-lg p-1.5 bg-Accent hover:scale-105 transition-all cursor-pointer text-dark-Primary-text"
            >
                {/* <ArrowElbowDownLeftIcon size={15} weight="bold" /> */}
                <PaperPlaneIcon size={12} weight="fill" />
            </button>
        </div>
    </form>
  )
}

export default ChatInput