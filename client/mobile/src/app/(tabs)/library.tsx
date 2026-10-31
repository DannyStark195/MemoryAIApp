import Header from "@/components/ui/Header"
import ScreenLayout from "@/components/ui/ScreenLayout"
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native"
import Folder from "@/components/ui/LibraryScreen/Folder"
import { type FolderType } from "@/types/model"
import { getFolders } from "@/api/getFolders";
import LoadingState from "../../components/ui/LoadingState";
import ErrorState from "../../components/ui/ErrorState";
import NewFolderOptions from "@/components/ui/LibraryScreen/NewFolderOptions";

function library() {
  const categories = ["All", "Favourites"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(false)
  const [newFolderOptionsOpen, setNewFolderOptionsOpen] = useState(false)
 
  function toggleNewFolderOptions(){
    setNewFolderOptionsOpen(prev => !prev)
    console.log("Do something")
  }
  useEffect(()=>{
      try{
        getFolders().then(setFolders)
        if(folders){
          throw new Error("Folders not found!")
        }
      }
      catch(error){
        console.log("Error:", error)
          setError(false)
      }
      finally{
        setLoading(false)
      }
  }, [])
  return (
    <>
      
      {
        error? <ErrorState errorProps={{
          title: "Error",
          error: "Folders not found!",
          action: toggleNewFolderOptions
        }} />: loading? <LoadingState />
        :
    <ScreenLayout>
      <Header>
        <Text className="text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Library</Text>
      </Header>
      <View className="mb-4 flex flex-row gap-2 flex-wrap">
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
      <View className="flex-row justify-between mb-6" style={{ zIndex: 10, elevation: 10 }}>
          <Text className="flex-1 text-Primary-text dark:text-dark-Primary-text text-[1rem] font-medium">Folders</Text>
                        <View className="relative" style={newFolderOptionsOpen ? { zIndex: 11, elevation: 11 } : undefined}>
                          <Pressable onPress={toggleNewFolderOptions}><Text className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm font-medium">+ New Folder</Text></Pressable>
                          <NewFolderOptions style={newFolderOptionsOpen? 'flex-row':'hidden'}/>
                        </View>
      </View>
      <View className="flex-col gap-4 h-[95%]">
       <FlatList 
          className=""
          data={folders}
          renderItem={({item}) => <Folder name={item.name} files={item.files}/>}
          keyExtractor={(item) => item.name}
          ListEmptyComponent={<Text className="text-Primary-text dark:text-dark-Primary-text text-sm font-medium">No folders found</Text>}
       />
      </View>
    </ScreenLayout>
    }
    </>
  )
}

export default library
