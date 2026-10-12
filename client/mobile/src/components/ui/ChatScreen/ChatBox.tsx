import { Text } from "react-native"

type chatBoxProps = {
    role: "user" | "ai"
    text: string
}
function ChatBox({role, text}:chatBoxProps) {
  return (
    <>
        {role=="user" && (
            <Text className="my-2 rounded-3xl px-4 py-3 bg-Accent text-dark-Primary-text dark:bg-dark-Accent-hover self-end">
                {text}
            </Text>
        )}
        {role ==="ai" && (
            <Text className="w-full px-2 lg:px-10 py-6 leading-8 text-Primary-text dark:text-dark-Primary-text">{text}</Text>
        )}
    </>
  )
}

export default ChatBox