import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import ScreenLayout from "@/components/ui/ScreenLayout";
import Header from "@/components/ui/Header";
import { AntDesign, Ionicons, StyledFontAwesome6 } from "@/components/icons";
import {useTheme} from "@/context/ThemeContext";
import AddMemoryFlow from "@/components/ui/AddMemoryFlow";
import {useState} from "react";
export default function index() {
  
  const {changeTheme} = useTheme()
  // changeTheme("system")
  const [addFilePanelOpen, setAddFilePanelOpen] = useState(false);

  function toggleAddFilePanelOpen(){
    setAddFilePanelOpen(prev => !prev);
  }
  return (
    <ScreenLayout>
        <Header>
          <View className="flex-row gap-1">
            <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">
              Good evening,
            </Text>
            <Text className="text-Accent text-xl font-medium">
              Daniel
            </Text> 
          </View> 
        </Header>
            <View>
                      {/* <View className="overflow-hidden"> */}
                        <Image source={require("../../../assets/images/profile.png")} className="" resizeMode="contain" style={
                        {width: "100%",
                        height:"84%",
                        // borderRadius: 50,
                        }
                        } />
                      {/* </View> */}
                    {/* <View className="relative">
                      <Text className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</Text>
                      <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
                    </View> */}
                    <View className="flex flex-col gap-5 absolute top-[30%] right-4 md:right-1 lg:-right-20">
                          <Pressable onPress={() => changeTheme("system")} className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 ">
                            <Ionicons name="share-social" size={24} color="" className="text-Primary-text dark:text-dark-Primary-text"/>
                          </Pressable>
                        <Pressable className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                          <AntDesign name="open-ai" size={24} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                        <Pressable onPress={toggleAddFilePanelOpen} className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2">
                          <StyledFontAwesome6 name="circle-plus" size={24} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                      </View>
                      <AddMemoryFlow style={addFilePanelOpen ? "flex-row" : "hidden"} />
                  </View>
    </ScreenLayout>
  );
}