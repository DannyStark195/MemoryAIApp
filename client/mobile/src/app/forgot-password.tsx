import { useState } from "react"
import Logo from "../components/ui/Logo"
import {EvilIcons, MaterialIcons, SimpleLineIcons} from "@expo/vector-icons"
import ScreenLayout from "../components/ui/ScreenLayout"
import ChangePassword from "../components/ui/AuthScreen/ChangePassword"
import { Link } from "expo-router"
import { View, Text, Pressable, TextInput } from "react-native"

function ForgotPassword() {
  const [forgotPasswordTab, setforgotPasswordTab] = useState(true)
  
  function sendCode(){
    setforgotPasswordTab(false)
  }
  return (
    <ScreenLayout>
      <View>
        <View className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row min-h-dvh">
          <View className="lg:w-[50%] lg:flex items-center justify-center mb-4">
            <View className="flex flex-col items-center">
              <View>
                <Logo classname="!w-[80px] !h-[80px]"/>
              </View>
              <Text className="text-2xl lg:text-5xl font-semibold mt-1 lg:mb-2 base-text">Memorii</Text>
              <Text className="lg:text-lg base-text text-[1rem]">Your memories organized beautifully.</Text>
            </View>
          </View>
          <View className="lg:flex-1 flex items-center justify-center ">
            <View className="w-full">
              <View className="w-100">
                {forgotPasswordTab? (
                  <View className="">
                    <Text className="text-3xl font-bold mb-2.5 base-text">Reset Password</Text>
                    <Text className="mb-10 text-[1rem] text-Secondary-text dark:text-dark-Secondary-text">Enter your email and we'll send you a reset code.</Text>

                     <View className="w-full">
                      <View className="flex flex-col gap-4 mb-4">
                        <View className="relative">
                          <View className="absolute top-2.5 left-3">
                            <EvilIcons name="envelope" size={22} className="base-text"/>
                          </View>
                          <TextInput keyboardType="email-address" placeholder="Email" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem]"/>
                        </View>
                      </View>
                      <Pressable onPress={sendCode} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                        <Text className="base-text-reverse font-semibold text-[1rem] text-center">Send Code</Text>
                      </Pressable>
                    </View>
                    <Text className="mt-4 text-sm base-text">Remember your password? <Link href={"/auth"} className="text-Accent font-medium"><Text>Log in</Text></Link></Text>
                  </View>
                ):(
                  <View>
                    <Text className="text-3xl font-bold mb-2.5 base-text">Change password</Text>
                    <Text className="mb-10 text-Secondary-text dark:text-dark-Secondary-text text-[1rem]">Enter reset code and a new password</Text>
                    <View>
                      <ChangePassword email="dannystark195@gmail.com"/>
                    </View>
                  </View>
                )}
                 
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  )
}

export default ForgotPassword