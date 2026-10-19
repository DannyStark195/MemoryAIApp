import { Link, router } from "expo-router"
import { View, Text, Pressable } from "react-native"

type settingsCardPProps ={
    icon: React.ReactElement
    text: string,
    link?: string
}
function SettingsCard({icon, text, link}:settingsCardPProps) {
  return (
    // <View className="">
        <Pressable onPress={()=>router.push(`/setting/${link}`)}>
            <View className="flex-row justify-between w-full cursor-pointer hover:bg-Surface dark:hover:bg-dark-Surface duration-300 transition-all py-4 px-1 rounded-md">
                <View className="flex-row gap-2">
                    <View className="text-Accent">
                        {icon}
                    </View>
                    <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text">
                        {text}
                    </Text>
                </View>
                <View className="">
                    {/* <CaretRightIcon size={12}/> */}
                </View>
            </View>
        </Pressable>
    // </View>
  )
}

export default SettingsCard