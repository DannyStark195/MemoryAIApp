import Header from "@/components/ui/Header";
import ScreenLayout from "@/components/ui/ScreenLayout";
import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import {useState} from "react"
function explore() {
  const memories: { id: string; title: string }[] = [];
  // const [categories, setCategories]= useState<string[]>(["All", "Favourites", "Notes", "Quotes", "School", "Work", "Books", "Coding"]);
  const categories = ["All", "Favourites", "Notes", "Quotes", "School", "Work", "Books", "Coding"];
  const [activeCategory, setActiveCategory] = useState("All");
  return (
   <ScreenLayout>
      <Header>
        <View className="">
          <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Explore</Text>
        </View>
      </Header>
      <View>
        <Text className="font-medium text-Primary-text dark:text-dark-Primary-text text-[1rem]">Categories</Text>
      </View>
      <View className="my-4 flex flex-row gap-2 flex-wrap ">
          {categories.map((category) =>(
            <Pressable className={`px-5 py-2 rounded-lg border cursor-pointer 
              ${activeCategory===category?'bg-Accent dark:bg-Accent border-Accent':'border-Surface2 dark:border-dark-Surface2'}
              `}
              onPress={() => setActiveCategory(category)}
              key={category}
              >
              <Text className={`text-sm font-semibold ${activeCategory===category?'text-dark-Primary-text': 'text-Primary-text dark:text-dark-Primary-text'}`}>{category}</Text>
            </Pressable>
          ))}
      </View>
      <FlatList
        data={memories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4">
            <Text>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View>
            <Text className="mt-5 text-Secondary-text dark:text-dark-Secondary-text text-[1rem]">No memories yet</Text>
          </View>
        }
      />
   </ScreenLayout>
  )
}

export default explore