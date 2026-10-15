import {EvilIcons, SimpleLineIcons} from "@expo/vector-icons"
import { Pressable, TextInput, View, Text } from "react-native"
import { Link } from "expo-router"

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
        <Link href={"/forgot-password"} className="text-end mb-2">
          <Text className="text-end base-text hover:text-Accent transition-colors duration-200 cursor-pointer text-sm">forgot password?</Text>
        </Link>
        <Pressable className="bg-dark-Background dark:bg-Background py-2.5 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
          <Text className="base-text-reverse font-semibold text-[1rem] text-center">
            Log in
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login