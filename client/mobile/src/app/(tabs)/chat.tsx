import ScreenLayout from "@/components/ui/ScreenLayout"
import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import ChatInput from "@/components/ui/ChatScreen/ChatInput";
import ChatBox from "@/components/ui/ChatScreen/ChatBox";
function chat() {
  type chatBoxProps = {
    id: string
    role: "user" | "ai"
    text: string
  }
  const chats: chatBoxProps[] = [{
    id: "1",
    role: "user",
    text: `What is this memory about.`
  },
  {
    id: "2",
    role: "ai",
    text: `Imagine this:
You have an app where you can save screenshots, notes, PDFs, links, images and other useful information. Instead of everything sitting there forgotten, the app periodically brings selected items back to you — for example, once in the morning and once later in the day. It could show you something you saved weeks or months ago, give you a short summary of a longer piece of information, or turn useful material into small learning/review cards. 
The goal is to help you actually revisit and get value from the things you already chose to save.`
  },
  {
    id: "3",
    role: "user",
    text: `Summarize this memory.`
  },
  {
    id: "4",
    role: "user",
    text: `Summarize this memory.`
  },
  {
    id: "5",
    role: "user",
    text: `Summarize this memory.`
  },
  {
    id: "6",
    role: "user",
    text: `Summarize this memory.`
  },
  {
    id: "7",
    role: "ai",
    text: `Imagine this:
You have an app where you can save screenshots, notes, PDFs, links, images and other useful information. Instead of everything sitting there forgotten, the app periodically brings selected items back to you — for example, once in the morning and once later in the day. It could show you something you saved weeks or months ago, give you a short summary of a longer piece of information, or turn useful material into small learning/review cards. 
The goal is to help you actually revisit and get value from the things you already chose to save.`
  }
]
  return (
    <ScreenLayout>
     <View className="h-[540px]">
              <View className="flex gap-2 ">
                <Text className="text-xl font-medium leading-wider mb-4 text-Primary-text dark:text-dark-Primary-text">Chat</Text>
                {/* <OpenAiLogoIcon size={30}/> */}
              </View>
        <FlatList
          data={chats}
          renderItem={({ item }) => <ChatBox role={item.role} text={item.text}/>}
          keyExtractor={(item) => item.id}
          className="flex-1 mb-100"
        />
            <View className="absolute bottom-[100px] right-6 left-6 md:bottom-40 md:right-20 md:left-20 lg:bottom-10 lg:right-30 lg:left-80 xl:right-60 xl:left-110">
                  <ChatInput />
            </View>
     </View>
    </ScreenLayout>
  )
}

export default chat