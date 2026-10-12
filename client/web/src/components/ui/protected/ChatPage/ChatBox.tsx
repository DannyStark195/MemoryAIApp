
type chatBoxProps = {
    role: "user" | "ai"
    text: string
}
function ChatBox({role, text}:chatBoxProps) {
  return (
    <>
        {role=="user" && (
            <div className="my-4 rounded-3xl px-4 py-2 bg-Accent text-dark-Primary-text dark:bg-dark-Accent-hover self-end">
                {text}
            </div>
        )}
        {role ==="ai" && (
            <div className="w-full px-2 lg:px-10 py-6 leading-8">{text}</div>
        )}
    </>
  )
}

export default ChatBox