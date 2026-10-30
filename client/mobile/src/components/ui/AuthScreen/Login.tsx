import { EvilIcons, SimpleLineIcons } from "@/components/icons";
import { Pressable, TextInput, View, Text } from "react-native"
import { router } from "expo-router"
import ActionBtn from "@/components/ui/ActionBtn"
function Login() {
  return (
    <View className="">
      <View className="w-full">
        <View className="flex flex-col gap-4 mb-4">
          <View className="relative">
            <View className="absolute top-2.5 left-3">
              <EvilIcons name="envelope" size={22} className="base-text" />
            </View>
            <TextInput keyboardType="email-address" placeholder="Email" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]" />
          </View>
          <View className="relative">
            <View className="absolute top-2.5 left-3">
              <SimpleLineIcons name="lock" size={18} className="text-Primary-text dark:text-dark-Primary-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="Password" className="w-full py-2 px-2.5 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]"/>
          </View>
        </View>
        <Pressable onPress={router.push("/forgot-password")} className="text-end mb-4">
          <Text className="text-end base-text hover:text-Accent text-sm w-full">forgot password?</Text>
        </Pressable>
       <ActionBtn text="Log In" style="w-full"/>
      </View>
    </View>
  )
}

export default Login