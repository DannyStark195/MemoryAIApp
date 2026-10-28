import { useRef, useState } from "react"
import {PaperPlaneIcon } from "@phosphor-icons/react"

function ChatInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [input, setInput] = useState("");
    const canSend = input.trim().length > 0;
    function handleChatInput (){
        const textarea = textareaRef.current
        if(!textarea) return
        textarea.style.height = "auto";
        textarea.style.height = `${Math.min(textarea.scrollHeight, 180)}px`
        setInput(textarea.value)
    }

  return (
    <form action="">
        <div className="flex items-end rounded-[26px] border border-Border bg-Background dark:bg-dark-Background px-3 py-2 dark:border-dark-Surface2 min-h-13">
            <textarea 
                name="" id=""
                placeholder="Ask me anything..."
                className="max-h-50 self-center text-sm overflow-y-auto resize-none outline-none w-[95%]"
                onInput={handleChatInput}
                ref={textareaRef}
                rows={1}
                value={input}
            >

            </textarea>
            <button
                type="button"
                className={`mb-0.5 h-10 w-10 flex items-center justify-center rounded-full ${canSend ? "bg-Accent" : "bg-dark-Accent-hover"} cursor-pointer`}
                disabled={!canSend}
            >
                <PaperPlaneIcon size={18} weight="fill" />
            </button>
        </div>
    </form>
  )
}

export default ChatInput