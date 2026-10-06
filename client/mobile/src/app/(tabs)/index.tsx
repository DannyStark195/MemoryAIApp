import { View, Text, TextInput, Pressable, Image, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import {Link, router} from "expo-router"
import { useColorScheme } from "nativewind";
import ScreenLayout from "@/components/ui/ScreenLayout";
import Header from "@/components/ui/Header";
import {Ionicons} from '@expo/vector-icons';
export default function HomeScreen() {
  return (
    <ScreenLayout>
      <View>
        <Header>
          <View className="flex flex-1 justify-between">
          <View>
            <Text className="text-xl md:text-xl font-medium leading-wider mb-2 dark:bg-dark-Background text-Primary-text dark:text-dark-Primary-text">
              Good evening,
              <Text className="text-Accent ml-1">
              Daniel
              </Text> 
            </Text>
            {/* <p className="w-45 md:w-full text-sm">Your memories, always within reach.</p> */}
          </View>
          
        </View>
        </Header>
        <View className="overflow-y-scroll max-h-[84dvh]">
                <View className="grid justify-center">
                  <View className="relative">
                    {/* <View className=" rounded-lg bg-Surface2 dark:bg-dark-Surface2"> */}
                      <Image source={require("../../../assets/images/profile.png")} className="!w-[200px] !h-[200px] rounded-xl" />
                    {/* </View> */}
                    {/* <View className="relative">
                      <span className="text-Secondary-text dark:text-dark-Secondary-text cursor-pointer text-sm" onClick={toggleNewFolderOptions}>+ New Folder</span>
                      <NewFolderOptions style={newFolderOptionsOpen? 'flex':'hidden'}/>
                    </View> */}
                    <View className="grid gap-4 absolute top-[30%] right-0 md:right-1 lg:-right-20">
                        <View>
                          <Pressable className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                            <Ionicons name="share-social" size={24} color="" />
                          </Pressable>
                        </View>
                        <Pressable className="px-2 py-2 rounded-full  cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2 hover:scale-110">
                          {/* <OpenAiLogoIcon size={30} weight="fill"/> */}
                        </Pressable>
                        {/* <Pressable onClick={toggleAddFilePanel} className="relative px-2 py-2 rounded-full cursor-pointer bg-Surface2 dark:bg-dark-Surface2 shadow-sm shadow-Surface2 dark:shadow-dark-Surface2"> */}
                          {/* <PlusCircleIcon size={30} weight="fill"/> */}
                        {/* </Pressable> */}
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
      </View>
    </ScreenLayout>
  );
}