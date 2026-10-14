import ScreenLayout from "@/components/ui/ScreenLayout"
import BackButton from "@/components/ui/BackButton"
import { useTheme } from "@/context/ThemeContext"
import MemoriesPerDayBtn from "./MemoriesPerDayBtn";
import { useState } from "react";
import ResurfacingScheduleButton from "./ResurfacingScheduleButton";
import { Pressable, Text, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";

function Preferences() {
  const {theme, changeTheme} = useTheme();
  // const root = document.documentElement
  const [resurfacingOn, setResurfacingOn] = useState(false)

  return (
    <ScreenLayout>
         <View className="flex justify-between mb-8">
                <Text className="text-xl md:text-xl font-medium leading-wider mb-2">Preferences</Text>
                <BackButton />
          </View>
          <main className="mt-8 overflow-y-auto max-h-[78dvh] no-scrollbar">
            <View>
              <Text className="font-medium">Appearance</Text>
              <View className="my-4 flex gap-4">
                <Pressable aria-label="light mode"  onPress={()=> changeTheme("light")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>Light</Text>
                  <View className="text-Accent">
                      <Ionicons name={`radio-button-${theme === "light" ? "on" : "off"}`} size={24} color="black" />
                    </View>
                </Pressable>
                <Pressable aria-label="dark mode" onPress={()=> changeTheme("dark")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>Dark</Text>
                  <View className="text-Accent">
                      <Ionicons name={`radio-button-${theme === "dark" ? "on" : "off"}`} size={24} color="black" />
                    </View>
                </Pressable>
                <Pressable aria-label="system default" onPress={()=> changeTheme("system")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>System</Text>
                  <View className="text-Accent">
                      <Ionicons name={`radio-button-${theme === "system" ? "on" : "off"}`} size={24} color="black" />
                    </View>
                </Pressable>
              </View>
            </View>
            <View>
              <Text className="font-medium">Memories per day</Text>
              <View className="my-4">
                <View className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>Number of memories to resurface daily</Text>
                  <MemoriesPerDayBtn />
                </View>
              </View>
            </View>
            <View>
              <Text className="font-medium">Resurfacing Schedule</Text>
              <View className="my-4">
                <View className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>When you'd like to recieve reminders</Text>
                  <ResurfacingScheduleButton />
                </View>
              </View>
            </View>
             <View>
              <Text className="font-medium">Notifications</Text>
              <View className="my-4">
                <View className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <Text>Resurfacing reminders</Text>
                  <View className="flex items-center gap-6">
                    <span className="font-medium">{resurfacingOn? 'on' : 'off'}</span>
                    <Pressable className={`relative w-11 h-6.5  rounded-full ${resurfacingOn? 'bg-Accent':'bg-Surface2 dark:bg-dark-Surface2'}`} onPress={()=> setResurfacingOn(prev => !prev)}>
                      <View className={`absolute  top-0.75 ${resurfacingOn?'right-1': 'left-1'} transition-all duration-500 p-2.5 bg-Background rounded-full`}></View>
                    </Pressable>
                  </View> 
                </View>
                
              </View>
            </View>
          </main>
       </ScreenLayout>
  )
}

export default Preferences