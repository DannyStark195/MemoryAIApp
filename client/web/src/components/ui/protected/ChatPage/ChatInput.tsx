import { useRef } from "react"
import { ArrowElbowDownLeftIcon, PaperPlaneIcon } from "@phosphor-icons/react"

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
        <div className="flex border border-Border dark:border-dark-Surface2 px-2 pt-1 pb-7 rounded-lg min-h-8">
            <textarea 
                name="" id=""
                placeholder=""
                className="max-h-50 text-sm overflow-y-auto flex-1 resize-none outline-none"
                onInput={handleChatInput}
                ref={textareaRef}
                rows={1}
            >

            </textarea>
            <button
                type="button"
                className="absolute bottom-1 right-2 rounded-lg p-2 bg-Accent cursor-pointer text-dark-Primary-text"
            >
                {/* <ArrowElbowDownLeftIcon size={15} weight="bold" /> */}
                <PaperPlaneIcon size={12} weight="fill" />
            </button>
        </div>
    </form>
  )
}

export default ChatInput