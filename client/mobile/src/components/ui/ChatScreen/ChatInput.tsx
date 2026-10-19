import { Pressable, TextInput, View } from "react-native"
import { Ionicons } from "@/components/icons";
import { useRef, useState } from "react"
function ChatInput() {
    const textareaRef = useRef<TextInput>(null)
    const [inputHeight, setInputHeight] = useState(30);
    const [input, setInput] = useState("")
    function handleChatInput (){
        const textarea = textareaRef.current
        if(!textarea) return
    }
  return (
    // <form action="">
        <View className="flex border bg-Background dark:bg-dark-Background border-Border dark:border-dark-Surface2 px-2 pt-1 pb-4 rounded-lg min-h-8">
            <TextInput 
                multiline
                placeholder="Ask me anything..."
                textAlignVertical="top"
                className="max-h-50 text-sm overflow-y-auto resize-none outline-none w-[92%]"
                ref={textareaRef}
                value={input}
                onChangeText={(text) => {
                    setInput(text)
                    setInputHeight(
                    Math.min(Math.min(text.length+30, 160), Math.max(30, (text.length - 20)))
                    );
                }}
                style={{ height: inputHeight }}
            />
            <Pressable
                className="absolute bottom-1.5 right-2 rounded-lg px-2 py-1 bg-Accent hover:scale-105 transition-all cursor-pointer text-dark-Primary-text"
            >
                <Ionicons name="paper-plane" size={14} className="text-dark-Primary-text rotate-[-45deg] mt-1"/>
            </Pressable>
        </View>
    // </form>
  )
}

export default ChatInput