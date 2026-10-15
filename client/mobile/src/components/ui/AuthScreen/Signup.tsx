import {EvilIcons, FontAwesome6, SimpleLineIcons} from "@expo/vector-icons"
import { Pressable, TextInput, View, Text } from "react-native"
// import { useToast } from "../../../context/ToastContext.tsx"
import { router } from 'expo-router'

function Signup() {
  // const {showToast} = useToast()
  function handleSignUp(){
    router.push('/verify-otp')
    // showToast({type:"success", message: "A verification link has been sent to your email!"})
  }
  return (
    <View className="">
      <View className="w-full">
        <View className="flex flex-col gap-4 mb-4">
          <View className="relative">
            <View className="absolute top-3 left-3">
              <FontAwesome6 name="user" size={18}  />
            </View>
            <TextInput placeholder="Full Name" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
          </View>
          <View className="relative">
            <View className="absolute top-3 left-3">
              <EvilIcons name="envelope" size={18} />
            </View>
            <TextInput keyboardType="email-address" placeholder="Email" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
          </View>
          <View className="relative">
            <View className="absolute top-3 left-3">
                <SimpleLineIcons name="lock" size={18} className="text-Primary-text dark:text-dark-Primary-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="Password" className="w-full py-2 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
          </View>
        </View>
        <Pressable onPress={handleSignUp} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
          <Text>Create account</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup