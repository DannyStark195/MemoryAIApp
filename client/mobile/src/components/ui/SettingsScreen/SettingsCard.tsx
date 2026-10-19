import { Link, router } from "expo-router"
import { View, Text, Pressable,  Alert} from "react-native"

type settingsCardPProps ={
    icon: React.ReactElement
    text: string,
    link: string
}
function SettingsCard({icon, text, link}:settingsCardPProps) {
  return (
    // <View className="">
        <View className="flex-row justify-between w-full cursor-pointer duration-300 transition-all py-4 px-1 rounded-md">
            <Pressable 
                onPress={
                ()=>{
                router.push({
                  pathname: "/setting/[name]",
                  params: { name: link },
                })}}>
                <View className="flex-row gap-2">
                    <View className="text-Accent">
                        {icon}
                    </View>
                    <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text">
                        {text}
                    </Text>
                </View>
                {/* <View className="">
                    <Pressable
                      onPress={() => Alert.alert("Working", text)}
                      style={{
                        backgroundColor: "orange",
                        padding: 20,
                      }}
                    >
                      <Text>{text}</Text>
                    </Pressable>
                </View> */}
        </Pressable>
    </View>
    // </View>
  )
}

export default SettingsCard