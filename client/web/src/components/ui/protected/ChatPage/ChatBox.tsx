
type chatBoxProps = {
    role: "user" | "ai"
    text: string
}
function ChatBox({role, text}:chatBoxProps) {
  return (
    <div>
        {role=="user" && (
            <div className="rounded-xl px-2 py-2 bg-Accent-hover">
                {text}
            </div>
        )}
        {role ==="ai" && (
            
        )}
    </div>
  )
}

export default ChatBox