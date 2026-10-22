import { Text, View } from "react-native";
import { Ionicons } from "@/components/icons";

type ChatBoxProps = {
  role: "user" | "ai";
  text: string;
};

export default function ChatBox({ role, text }: ChatBoxProps) {
  if (role === "user") {
    return (
      <View className="mb-5 flex-row justify-end pl-12">
        <Text className="max-w-full rounded-[22px] rounded-br-md bg-Accent px-4 py-3 text-[15px] leading-6 text-dark-Primary-text">
          {text}
        </Text>
      </View>
    );
  }

  return (
    <View className="mb-5 flex-row items-start pr-5">
      <View className="mr-3 mt-0.5 h-8 w-8 items-center justify-center rounded-xl bg-Accent/15">
        <Ionicons name="sparkles" size={16} className="text-Accent" />
      </View>
      <Text className="flex-1 pt-1 text-[15px] leading-6 text-Primary-text dark:text-dark-Primary-text">
        {text}
      </Text>
    </View>
  );
}
