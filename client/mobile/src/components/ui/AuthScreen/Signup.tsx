import { EvilIcons, FontAwesome6, SimpleLineIcons } from "@/components/icons";
import { Pressable, TextInput, View, Text } from "react-native"
import Toast from "react-native-toast-message"
import { router } from 'expo-router'

function Signup() {

  function handleSignUp(){
    router.push('/verify-otp')
    Toast.show(
      {
        type:"success", 
        text1: "A verification code has been sent to your email!",
      }
    )
  }
  return (
    <View className="">
      <View className="w-full">
        <View className="flex flex-col gap-4 mb-4">
          <View className="relative">
            <View className="absolute top-3 left-3">
              <FontAwesome6 name="user" size={16}  className="base-text"/>
            </View>
            <TextInput placeholder="Full Name" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]"/>
          </View>
          <View className="relative">
            <View className="absolute top-2.5 left-3">
              <EvilIcons name="envelope" size={22} className="base-text"/>
            </View>
            <TextInput keyboardType="email-address" placeholder="Email" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]"/>
          </View>
          <View className="relative">
            <View className="absolute top-2.5 left-3">
                <SimpleLineIcons name="lock" size={17} className="text-Primary-text dark:text-dark-Primary-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="Password" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]"/>
          </View>
        </View>
        <Pressable onPress={handleSignUp} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2.5 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
          <Text className="base-text-reverse font-semibold text-[1rem] text-center">Create account</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Signup