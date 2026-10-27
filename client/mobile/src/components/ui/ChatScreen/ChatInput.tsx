import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Ionicons } from "@/components/icons";

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput() {
  const [input, setInput] = useState("");
  const [inputHeight, setInputHeight] = useState(40);
  const canSend = input.trim().length > 0;

  // function send() {
  //   if (!canSend) return;
  //   onSend(input);
  //   setInput("");
  // }

  return (
    <View className="flex-row items-end rounded-[26px] border border-Border bg-Background dark:bg-dark-Background px-2 py-2 dark:border-dark-Surface2">
      <TextInput
        accessibilityLabel="Message Memory AI"
        className="max-h-[128px] min-h-[40px] flex-1 px-3 py-2 text-[15px] leading-5 text-Primary-text dark:text-dark-Primary-text outline-none"
        multiline
        onChangeText={setInput}
        onContentSizeChange={(event) =>
          setInputHeight(Math.min(Math.max(event.nativeEvent.contentSize.height, 40), 112))
        }
        // onSubmitEditing={send}
        placeholder="Ask me anything..."
        placeholderTextColor="#99958D"
        returnKeyType="send"
        style={{ height: inputHeight }}
        textAlignVertical="center"
        value={input}
      />
      <Pressable
        accessibilityLabel="Send message"
        accessibilityRole="button"
        className={`mb-0.5 h-10 w-10 items-center justify-center rounded-full ${canSend ? "bg-Accent" : "bg-Accent/40"}`}
        disabled={!canSend}
        // onPress={send}
      >
        <Ionicons name="paper-plane" size={14} className="text-dark-Primary-text rotate-[-45deg] mt-1"/>
      </Pressable>
    </View>
  );
}
