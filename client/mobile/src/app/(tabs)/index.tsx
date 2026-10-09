import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import {Link, router} from "expo-router"
import { useColorScheme } from "nativewind";
import ScreenLayout from "@/components/ui/ScreenLayout";
import Header from "@/components/ui/Header";
import {Ionicons, AntDesign, FontAwesome6} from '@expo/vector-icons';
import {useTheme} from "@/context/ThemeContext";
export default function HomeScreen() {
  const {changeTheme} = useTheme()
  // changeTheme("system")
  return (
    <ScreenLayout>
      {/* <View> */}
        <Header>
          <View className="flex flex-1 justify-between">
          <View>
            <Text className="text-xl md:text-xl font-medium leading-wider mb-2 dark:bg-dark-Background text-Primary-text dark:text-dark-Primary-text">
              Good evening,
              <Text className="text-Accent ml-1">
              Daniel
              </Text> 
            </Text>
          </View> 
        </View>
        </Header>
        <View className="">
                <View className="overflow-y-scroll max-h-[84dvh]">
                  <View className="flex flex-col justif-center items-center">
                      <Image source={require("../../../assets/images/profile.png")} className="!w-[340px] !h-[480px] rounded-lg object-center overflow-hidden" />
                    {/* <View className="relative">
                      <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</span>
                      <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
                    </View> */}
                    <View className="flex flex-col gap-5 absolute top-[30%] right-7 md:right-1 lg:-right-20">
                          <Pressable onPress={() => changeTheme("dark")} className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                            <Ionicons name="share-social" size={25} color="" className="text-Primary-text dark:text-dark-Primary-text"/>
                          </Pressable>
                        <Pressable className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                          <AntDesign name="open-ai" size={25} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                        <Pressable className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2">
                          <FontAwesome6 name="circle-plus" size={25} className="text-Primary-text dark:text-dark-Primary-text" />
                        </Pressable>
                        {/* <AddMemoryFlow style={addFilePanelOpen ? "flex" : "hidden"} /> */}
                    </View>
                  </View>
                  <View className="hidden mt-4 gap-6 lg:flex justify-center">
                    <Pressable className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2  cursor-pointer hover:scale-110">
                      {/* <CaretLeftIcon size={20} weight="regular"/> */}
                    </Pressable>
                    <Pressable className="py-2 px-2 rounded-full hover:bg-Surface2 dark:hover:bg-dark-Surface2  cursor-pointer hover:scale-110">
                      {/* <CaretRightIcon size={20} weight="regular"/> */}
                    </Pressable>
                  </View>
                </View>
              </View>
      {/* </View> */}
    </ScreenLayout>
  );
}