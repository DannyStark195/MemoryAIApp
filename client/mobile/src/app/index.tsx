import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";
// import MemoryCard from "@/components/MemoryCard";
import type { Memory } from "@/types/memory";
import {Link, router} from "expo-router"

export default function HomeScreen() {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const canSave = title.trim().length > 0;
  function handleSave(){
    if(!canSave) return;

    console.log({
      title,
      note,
    });
  }

  // type Memory = {
  //   id: string,
  //   title: string,
  //   description: string,
  // }
const memories: Memory[] = [
  {
    id: "1",
    title: "React Native",
    description: "Learning mobile development",
    type: "note",
    createdAt: "2026-08-29",
  },
  {
    id: "2",
    title: "React Native Screenshot",
    type: "image",
    createdAt: "2026-08-29",
  },
];

  return (
  <View className="flex-1 bg-red-800 px-6 pt-16">
      <Link href="/settings" asChild>
        <View>
          <Text className="text-right text-red-900">
            settings
          </Text>
        </View>
      </Link>
      <Text className="mb-6 text-3xl font-bold">
        My Library
      </Text>

      {/* <View className=""> */}
            <FlatList
              className="flex"
              // horizontal
              data={memories}
              contentContainerClassName="flex flex-row"
              keyExtractor={(item) => item.id}
              // renderItem={({ item }) => (
              //   <MemoryCard
              //     memory={item}
              //     onPress={() => {
              //       // console.log("Pressed:", item.title);
              //       router.push(`/memory/${item.id}`);
              //     }}
              //   />
              // )}
              ListEmptyComponent={
                <View className="items-center py-20">
                  <Text className="text-lg font-semibold">
                    Nothing here yet
                  </Text>

                  <Text className="mt-2 text-gray-900">
                    Save your first memory!
                  </Text>
                </View>
              }
              // ItemSeparatorComponent={() => (
              //   <View className="h-px bg-gray-200" />
              // )}

            />
      {/* </View> */}
       <Link href="/library" asChild>
        <Pressable className="rounded-xl bg-black px-5 py-3">
          <Text className="text-white">
            Go to Library
          </Text>
        </Pressable>
      </Link>
    </View>

  );
}