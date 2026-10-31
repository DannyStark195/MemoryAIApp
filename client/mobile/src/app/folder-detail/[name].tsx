import { View, Text, Pressable, FlatList } from "react-native"
import { useLocalSearchParams } from "expo-router";
import ScreenLayout from "@/components/ui/ScreenLayout";
import { useEffect, useState } from "react";
import { Memory } from "@/types/model";
import { Octicons, StyledFontAwesome6 } from "@/components/icons";
import BackButton from "@/components/ui/BackButton";
import File from "@/components/ui/LibraryScreen/File";
import AddMemoryFlow from "@/components/ui/AddMemoryFlow";
import CustomTabBar from "@/components/ui/CustomTabBar";
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
          {
            id: '5',
            name: "file4",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '6',
            name: "file4",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '7',
            name: "file4",
            url: "//Personal",
            created_at: "Yesterday",
            favourite: true,
            category: "Personal"
          },
          {
            id: '8',
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
        <Pressable className="cursor-pointer text-lg hover:bg-Surface2 dark:hover:bg-dark-Surface2 px-2 py-1 rounded-full">
             <Octicons name="pencil" size={17} className="text-Primary-text dark:text-dark-Primary-text"/>
        </Pressable>
      </View>
      <View className="max-h-[68%] flex-1 w-full gap-x-4">
          <FlatList 
            data={folder}
            renderItem={({ item }) => (
              <File fileProps={item} key={item.id} />
            )}
          />
      </View>
      <View className="relative">
       <AddMemoryFlow style={addFilePanelOpen ? "flex-row -top-24" : "hidden"}/>
      </View>
      <Pressable onPress={toggleAddFilePanel} className="absolute bottom-[16%] right-[5%] bg-Accent px-2.5 py-2 rounded-lg">
        <StyledFontAwesome6 name="plus" size={20} className="text-dark-Primary-text" />
      </Pressable>
      <CustomTabBar />
    </ScreenLayout>
  )
}

export default FolderDetail