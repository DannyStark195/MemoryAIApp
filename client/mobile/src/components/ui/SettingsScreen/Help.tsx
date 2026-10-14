import BackButton from "@/components/ui/BackButton"
import ScreenLayout from "../ScreenLayout"
import { Linking, Pressable, Text, View } from "react-native"
import {AntDesign, EvilIcons, Feather, MaterialIcons, Octicons} from "@expo/vector-icons"

function Help() {
  return (
     <ScreenLayout>
      <View className="flex-row justify-between mb-4">
        <Text className="font-medium leading-wider text-Primary-text dark:text-dark-Primary-text text-xl">Help & FeedBack</Text>
        <BackButton />
      </View>
      <View className="mt-8 overflow-y-auto max-h-[78dvh] no-scrollbar">
        <View>
          <Text className="font-medium text-Primary-text dark:text-dark-Primary-text text-lg">Help</Text>
            <View className="my-4">
              <Pressable onPress={()=> Linking.openURL("https://memoryaiapp.pxxl.click")} className="flex-row items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <Feather name="play-circle" size={22} className="text-Accent" />
                <Text className="ext-Primary-text dark:text-dark-Primary-text text-[1rem]">Get Started</Text>
              </Pressable>
            </View>
        </View>
         <View>
          <Text className="font-medium text-Primary-text dark:text-dark-Primary-text text-lg">Feedback</Text>
            <View className="my-4">
              <Pressable onPress={()=> Linking.openURL("https://wa.me/2348101836183")} className="flex-row items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <Octicons name="bug" size={22} className="text-Accent" />
                <Text className="ext-Primary-text dark:text-dark-Primary-text text-[1rem]">Report a problem</Text>
              </Pressable>
               <Pressable onPress={()=> Linking.openURL("https://wa.me/2348101836183")} className="flex-row items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                  <MaterialIcons name="chat" size={22} className="text-Accent" />
                  <Text className="ext-Primary-text dark:text-dark-Primary-text text-[1rem]">Send feedback</Text>
              </Pressable>
               <Pressable onPress={()=> Linking.openURL("https://wa.me/2348101836183")} className="flex-row items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                  <AntDesign name="bulb" size={22} className="text-Accent" />
                  <Text className="ext-Primary-text dark:text-dark-Primary-text text-[1rem]">Suggest a feature</Text>
              </Pressable>
            </View>
        </View>
         <View>
          <Text className="font-medium text-Primary-text dark:text-dark-Primary-text text-lg">Contact</Text>
            <View className="my-4">
              <Pressable onPress={()=> Linking.openURL("https://wa.me/2348101836183?text=Hi%2C%20I%20how%20to%20can%20I%20help")} className="flex-row items-center gap-2 w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-3">
                <EvilIcons name="envelope" size={24} className="text-Accent" />
                <Text className="ext-Primary-text dark:text-dark-Primary-text text-[1rem]">Contact support</Text>
              </Pressable>
            </View>
        </View>
      </View>
   </ScreenLayout>
  )
}

export default Help