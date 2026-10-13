import ScreenLayout from "../../../components/ui/ScreenLayout"
import BackButton from "../../../components/ui/BackButton"
import Logo from "../../../components/ui/Logo"
import { Linking, Pressable,View, Text } from "react-native";

function About() {
  return (
    <ScreenLayout>
      <View className="flex-row justify-end mb-6">
                  <BackButton />
              </View>
              <View>
                  <View className="flex flex-col items-center justify-center mb-4">
                     <View>
                        <Logo classname="w-20"/>
                     </View>
                      <Text className="text-2xl font-semibold mt-2">Memorii</Text>
                      <Text className="mb-1 text-Secondary-text dark:text-dark-Secondary-text">Your Memories organized beautifully</Text>
                      <Text className="text-Secondary-text dark:text-dark-Secondary-text text-sm">Version 1.0.0</Text>
                  </View>
                  <View className="md:px-0">
                    <Text className="text-center mb-10">Memorii helps you rediscover the things you've saved by bringing meaningful memories to you at the right time.</Text>
                    <View className="overflow-y-auto max-h-[40dvh] no-scrollbar">
                        <View>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/privacy-policy')}}>
                            <View  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text>Privacy Policy</Text></View>
                          </Pressable>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/terms-of-service')}} >
                            <View  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text>Terms of service</Text></View>
                          </Pressable>
                        </View>
                        <View>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/')}}>
                            <View  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text>Website</Text></View>
                          </Pressable>
                          <Pressable onPress={() => {Linking.openURL('https://memoryaiapp.pxxl.click/contact')}}>
                            <View  className="flex items-center justify-between w-full py-3 px-3 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer mb-4"><Text>Contact support</Text></View>
                          </Pressable>
                        </View>
                    </View>
                  </View>
              </View>
    </ScreenLayout>
  )
}

export default About