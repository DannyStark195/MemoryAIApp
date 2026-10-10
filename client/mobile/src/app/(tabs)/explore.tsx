import Header from "@/components/ui/Header";
import ScreenLayout from "@/components/ui/ScreenLayout";
import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";

function explore() {
  const memories = [
    { id: "1", title: "React Native notes" },
    { id: "2", title: "Clothing inspiration" },
    { id: "3", title: "Project ideas" },
  ];
  return (
   <ScreenLayout>
    <FlatList
      data={memories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View className="p-4">
          <Text>{item.title}</Text>
        </View>
      )}
      ListHeaderComponent={
        <>
          <Header>
            <View className="">
              <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Explore</Text>
            </View>
          </Header>
          <View>
            <Text className="font-medium text-Primary-text dark:text-dark-Primary-text text-[1rem]">Categories</Text>
          </View>
        </>
      }
    />
   </ScreenLayout>
  )
}

export default explore