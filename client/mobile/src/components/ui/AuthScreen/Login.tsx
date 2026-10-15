import {EvilIcons, MaterialIcons} from "@expo/vector-icons"
import { Pressable, TextInput, View, Text } from "react-native"
import { Link } from "expo-router"

function Login() {
  return (
    <View className="">
      <View className="w-full">
        <View className="flex flex-col gap-4 mb-4">
          <View className="relative">
            <View className="absolute top-3 left-3">
              <EvilIcons name="envelope" size={18} />
            </View>
            <TextInput keyboardType="email-address" placeholder="Email" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0" />
          </View>
          <View className="relative">
            <View className="absolute top-3 left-3">
              <MaterialIcons name="lock" size={18} />
            </View>
            <TextInput secureTextEntry={true} placeholder="Password" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
          </View>
        </View>
        <Link href={"/forgot-password"}>
          <Text className="text-end hover:text-Accent transition-colors duration-200 cursor-pointer my-2 text-sm">forgot password?</Text>
        </Link>
        <Pressable className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
          <Text>
            Log in
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login