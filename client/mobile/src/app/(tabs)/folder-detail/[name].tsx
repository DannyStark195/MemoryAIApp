import { View, Text, Pressable, FlatList } from "react-native"
import { useLocalSearchParams } from "expo-router";
import ScreenLayout from "@/components/ui/ScreenLayout";
import { useEffect, useState } from "react";
import { Memory } from "@/types/model";
import Octicons from "@expo/vector-icons/build/Octicons";
import BackButton from "@/components/ui/BackButton";
import File from "@/components/ui/LibraryScreen/File";
function FolderDetail() {
  const { name } = useLocalSearchParams<{name: string}>();
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);
  function toggleAddFilePanel(){
     setAddFilePanelOpen(prev => !prev)
   } 
  const [folder, setFolder] = useState<Memory[]>([]);
  useEffect(() =>{
    setFolder(
      [
          {
            id: '1',
            name: "file1",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '2',
            name: "file2",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '3',
            name: "file3",
            url: "//Personal",
            created_at: "Today",
            favourite: false,
            category: "Personal"
          },
          {
            id: '4',
            name: "file4",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
        ]
    )

  }, [])
  return (
    <ScreenLayout>
      <View className="flex-row justify-between">
        <Text className="text-xl md:text-xl leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text font-semibold">{name} </Text>
        <BackButton/>
      </View>
      <View className="relative flex-row justify-end items-center gap-3 my-4">
        <Pressable onPress={toggleAddFilePanel} className="cursor-pointer hover:bg-Surface2 dark:hover:bg-dark-Surface2 px-2 py-1 rounded-full"><Text className="text-Primary-text dark:text-dark-Primary-text text-xl">+</Text></Pressable>
        <Pressable className="cursor-pointer text-lg hover:bg-Surface2 dark:hover:bg-dark-Surface2 px-2 py-1 rounded-full">
             <Octicons name="pencil" size={17} className="text-Primary-text dark:text-dark-Primary-text"/>
        </Pressable>
      </View>
      <View className="overflow-y-scroll max-h-[90dvh] flex w-full gap-x-4">
          <FlatList 
            data={folder}
            renderItem={({ item }) => (
              <File fileProps={item} key={item.id} />
            )}
          />
      </View>
    </ScreenLayout>
  )
}

export default FolderDetail