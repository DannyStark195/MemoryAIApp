import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@/components/icons";
import ChatBox from "@/components/ui/ChatScreen/ChatBox";
import ChatInput from "@/components/ui/ChatScreen/ChatInput";
import ScreenLayout from "@/components/ui/ScreenLayout";

type ChatMessage = {
  id: string;
  role: "user" | "ai";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    text: "What is this memory about?",
  },
  {
    id: "2",
    role: "ai",
    text: "It’s about using a personal memory app to save useful things—like notes, links, screenshots, and PDFs—and revisit them later. The goal is to make saved information easier to remember and use.",
  },
  {
    id: "3",
    role: "user",
    text: "Can you give me the short version?",
  },
  {
    id: "4",
    role: "ai",
    text: "Save useful things now, then let the app bring them back when they can help you.",
  },
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(initialMessages);
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

  function sendMessage(text: string) {
    const message = text.trim();
    if (!message) return;

    setMessages((current) => [
      ...current,
      { id: `${Date.now()}`, role: "user", text: message },
    ]);
  }

  return (
    <ScreenLayout>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="flex-1">
          <View className="flex-row items-center border-b border-Border pb-4 dark:border-dark-Surface2">
            <View className="mr-3 h-11 w-11 items-center justify-center rounded-2xl bg-Accent">
              <Ionicons name="sparkles" size={22} className="text-dark-Primary-text" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-semibold text-Primary-text dark:text-dark-Primary-text">
                Memory AI
              </Text>
              <View className="mt-1 flex-row items-center">
                <View className="mr-1.5 h-2 w-2 rounded-full bg-emerald-500" />
                <Text className="text-xs text-Secondary-text dark:text-dark-Secondary-text">
                  Ready to help with your memories
                </Text>
              </View>
            </View>
            <View className="h-10 w-10 items-center justify-center rounded-full bg-Surface dark:bg-dark-Surface">
              <Ionicons name="ellipsis-horizontal" size={20} className="text-Secondary-text dark:text-dark-Secondary-text" />
            </View>
          </View>

          <FlatList
            className="flex-1"
            data={[...messages].reverse()}
            inverted
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChatBox role={item.role} text={item.text} />}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          />

          <View
            className="pt-3"
            style={{ marginBottom: keyboardVisible ? 12 : 72 }}
          >
            <ChatInput onSend={sendMessage} />
            <Text className="mt-2 text-center text-[11px] text-Tertiary-text dark:text-dark-Tertiary-text">
              Answers are based on the memories you’ve saved
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
}
