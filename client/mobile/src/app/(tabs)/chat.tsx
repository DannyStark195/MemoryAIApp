import ScreenLayout from "@/components/ui/ScreenLayout";
import ChatInput from "@/components/ui/ChatScreen/ChatInput";
import ChatBox from "@/components/ui/ChatScreen/ChatBox";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";

type ChatMessage = {
  id: string;
  role: "user" | "ai";
  text: string;
};

const chats: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    text: "What is this memory about.",
  },
  {
    id: "2",
    role: "ai",
    text: `Imagine this:
You have an app where you can save screenshots, notes, PDFs, links, images and other useful information. Instead of everything sitting there forgotten, the app periodically brings selected items back to you — for example, once in the morning and once later in the day. It could show you something you saved weeks or months ago, give you a short summary of a longer piece of information, or turn useful material into small learning/review cards.
The goal is to help you actually revisit and get value from the things you already chose to save.`,
  },
  { id: "3", role: "user", text: "Summarize this memory." },
  { id: "4", role: "user", text: "Summarize this memory." },
  { id: "5", role: "user", text: "Summarize this memory." },
  { id: "6", role: "user", text: "Summarize this memory." },
  {
    id: "7",
    role: "ai",
    text: `Imagine this:
You have an app where you can save screenshots, notes, PDFs, links, images and other useful information. Instead of everything sitting there forgotten, the app periodically brings selected items back to you — for example, once in the morning and once later in the day. It could show you something you saved weeks or months ago, give you a short summary of a longer piece of information, or turn useful material into small learning/review cards.
The goal is to help you actually revisit and get value from the things you already chose to save.`,
  },
];

export default function ChatScreen() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";
    const showSubscription = Keyboard.addListener(showEvent, () => setKeyboardVisible(true));
    const hideSubscription = Keyboard.addListener(hideEvent, () => setKeyboardVisible(false));

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <ScreenLayout>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-1">
          <Text className="mb-4 text-xl font-medium leading-wider text-Primary-text dark:text-dark-Primary-text">
            Chat
          </Text>
          <FlatList
            data={chats}
            renderItem={({ item }) => <ChatBox role={item.role} text={item.text} />}
            keyExtractor={(item) => item.id}
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 16 }}
            keyboardShouldPersistTaps="handled"
          />
          <View
            className="px-2 md:px-4"
            style={{ marginBottom: keyboardVisible ? 12 : 72 }}
          >
            <ChatInput />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
}
