import ScreenLayout from "../../../components/ui/ScreenLayout"
import BackButton from "../../../components/ui/BackButton"
import Logo from "../../../components/ui/Logo"
import { Linking, Pressable,View, Text, ScrollView } from "react-native";

function About() {
  return (
    <ScreenLayout>
      <View className="flex-row justify-end mb-6">
                  <BackButton />
              </View>
              <View>
                  <View className="flex flex-col items-center justify-center mb-4">
                     <View>
                        <Logo classname="!w-[80px] !h-[80px]"/>
                     </View>
                      <Text className="text-2xl font-semibold my-1 text-Primary-text dark:text-dark-Primary-text">Memorii</Text>
                      <Text className="mb-1.5 text-Secondary-text dark:text-dark-Secondary-text text-[1rem]">Your Memories organized beautifully</Text>
                      <Text className="text-Secondary-text dark:text-dark-Secondary-text text-sm">Version 1.0.0</Text>
                  </View>
                  <View className="md:px-0">
                    <Text className="text-center mb-10 text-Primary-text dark:text-dark-Primary-text text-[1rem] leading-6">Memorii helps you rediscover the things you've saved by bringing meaningful memories to you at the right time.</Text>
                    <ScrollView className="h-[70%] no-scrollbar">
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/privacy-policy')}}>
                            <View  className="w-full py-3.5 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text className="text-Primary-text dark:text-dark-Primary-text text-[1rem]">Privacy Policy</Text></View>
                          </Pressable>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/terms-of-service')}} >
                            <View  className="w-full py-3.5 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text className="text-Primary-text dark:text-dark-Primary-text text-[1rem]">Terms of service</Text></View>
                          </Pressable>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/')}}>
                            <View  className="w-full py-3.5 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text className="text-Primary-text dark:text-dark-Primary-text text-[1rem]">Website</Text></View>
                          </Pressable>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/contact')}}>
                            <View  className="w-full py-3.5 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text className="text-Primary-text dark:text-dark-Primary-text text-[1rem]">Contact support</Text></View>
                          </Pressable>
                    </ScrollView>
                  </View>
              </View>
    </ScreenLayout>
  )
}

export default About