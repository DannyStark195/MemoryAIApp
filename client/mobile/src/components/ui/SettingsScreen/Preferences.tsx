import ScreenLayout from "@/components/ui/ScreenLayout"
import BackButton from "@/components/ui/BackButton"
import { useTheme } from "@/context/ThemeContext"
import MemoriesPerDayBtn from "./MemoriesPerDayBtn";
import { useState } from "react";
import ResurfacingScheduleButton from "./ResurfacingScheduleButton";
import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@/components/icons";

function Preferences() {
  const {theme, changeTheme} = useTheme();
  // const root = document.documentElement
  const [resurfacingOn, setResurfacingOn] = useState(false)

  return (
    <ScreenLayout>
         <View className="flex-row justify-between mb-12">
                <Text className="text-xl md:text-xl font-medium text-Primary-text dark:text-dark-Primary-text leading-wider mb-2">Preferences</Text>
                <BackButton />
          </View>
          <View className="no-scrollbar">
            <View className="mb-2">
              <Text className="font-medium text-Primary-text dark:text-dark-Primary-text">Appearance</Text>
              <View className="my-4 flex-row gap-4">
                <Pressable aria-label="light mode"  onPress={()=> changeTheme("light")} className="flex-row items-center justify-between flex-1 py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text">Light</Text>
                  <View>
                      <Ionicons name={`radio-button-${theme === "light" ? "on" : "off"}`} size={24} className="text-Accent" />
                    </View>
                </Pressable>
                <Pressable aria-label="dark mode" onPress={()=> changeTheme("dark")} className="flex-row items-center justify-between flex-1 py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text">Dark</Text>
                  <View>
                      <Ionicons name={`radio-button-${theme === "dark" ? "on" : "off"}`} size={24} className="text-Accent" />
                    </View>
                </Pressable>
                <Pressable aria-label="system default" onPress={()=> changeTheme("system")} className="flex-row items-center justify-between flex-1 py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text">System</Text>
                  <View>
                      <Ionicons name={`radio-button-${theme === "system" ? "on" : "off"}`} size={24} className="text-Accent" />
                    </View>
                </Pressable>
              </View>
            </View>
            <View className="mb-2">
              <Text className="font-medium text-Primary-text dark:text-dark-Primary-text">Memories per day</Text>
              <View className="my-4">
                <View className="flex-row items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text leading-6">Number of memories to resurface daily</Text>
                  <MemoriesPerDayBtn />
                </View>
              </View>
            </View>
            <View className="mb-2">
              <Text className="font-medium text-Primary-text dark:text-dark-Primary-text">Resurfacing Schedule</Text>
              <View className="my-4">
                <View className="flex-row items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text leading-6">When you'd like to receive reminders</Text>
                  <ResurfacingScheduleButton />
                </View>
              </View>
            </View>
             <View className="mb-2">
              <Text className="font-medium text-Primary-text dark:text-dark-Primary-text">Notifications</Text>
              <View className="my-4">
                <View className="flex-row items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text className="text-Primary-text dark:text-dark-Primary-text">Resurfacing reminders</Text>
                  <View className="flex-row items-center gap-4">
                    <Text className="font-medium text-Primary-text dark:text-dark-Primary-text">{resurfacingOn? 'on' : 'off'}</Text>
                    <Pressable onPress={()=> setResurfacingOn(prev => !prev)}>
                      <View className={`relative !w-[46px] !h-[24px] rounded-full ${resurfacingOn? 'bg-Accent':'bg-Surface2 dark:bg-dark-Surface2'}`} >
                        <View className={`absolute top-1 ${resurfacingOn?'right-1 left-auto': 'left-1 right-auto'} transition-all duration-500 p-2 bg-Background rounded-full`}></View>
                      </View>
                    </Pressable>
                  </View> 
                </View>
                
              </View>
            </View>
          </View>
       </ScreenLayout>
  )
}

export default Preferences