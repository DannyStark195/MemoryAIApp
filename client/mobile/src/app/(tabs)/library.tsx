import Header from "@/components/ui/Header"
import ScreenLayout from "@/components/ui/ScreenLayout"
import { useState } from "react";
import { Pressable, Text, View } from "react-native"
function library() {
  const categories = ["All", "Favourites"];
  const [activeCategory, setActiveCategory] = useState("All");
  // const [folders, setFolders] = useState<FolderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(false)
  return (
    <ScreenLayout>
      <Header>
        <Text className="text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Library</Text>
      </Header>
      <View className="mb-4 flex flex-row gap-2  flex-wrap">
        {categories.map((category) =>(
          <Pressable className={`px-5 py-2 rounded-lg border cursor-pointer 
            ${activeCategory===category?'bg-Accent dark:bg-Accent border-Accent text-dark-Primary-text':'border-Surface2 dark:border-dark-Surface2'}
            `}
            onPress={() => setActiveCategory(category)}
            key={category}
            >
            <Text className={`text-sm font-semibold ${activeCategory===category?'text-dark-Primary-text': 'text-Primary-text dark:text-dark-Primary-text'}`}>{category}</Text>
          </Pressable>
        ))}
      </View>
      <View className="flex-row justify-between mb-2">
          <Text className="flex-1 text-Primary-text dark:text-dark-Primary-text text-[1rem] font-medium">Folders</Text>
                        <div className="relative">
                          <Pressable ><Text className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm font-medium">+ New Folder</Text></Pressable>
                          {/* <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/> */}
                        </div>
      </View>
      <View className="flex gap-4">
        
      </View>
    </ScreenLayout>
  )
}

export default library