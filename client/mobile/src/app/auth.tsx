import { useState } from "react"
import Logo from "../components/ui/Logo"
import Login from "../components/ui/AuthScreen/Login"
import Signup from "../components/ui/AuthScreen/Signup"
import ScreenLayout from "../components/ui/ScreenLayout"
import GoogleButton from "../components/ui/AuthScreen/GoogleButton"
import FacebookButton from "../components/ui/AuthScreen/FacebookButton"
import AppleButton from "../components/ui/AuthScreen/AppleButton"
import { Pressable, Text, View } from "react-native"

function Auth() {
  const [loginTabOpen, setLoginTabOpen] = useState(true)
  function openLoginTab(){
    setLoginTabOpen(true)
  }
  function closeLoginTab(){
    setLoginTabOpen(false)
  }
  return (
    <ScreenLayout >
      <View className="flex-1 justify-center">
        <View className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row">
          <View className="lg:w-[50%] lg:flex items-center justify-center mb-4">
            <View className="flex flex-col items-center">
              <View>
                <Logo classname="!w-[80px] !h-[80px]"/>
              </View>
              <Text className="base-text text-2xl lg:text-5xl font-semibold lg:mb-2">Memorii</Text>
              <Text className="lg:text-lg base-text text-[1rem]">Your memories organized beautifully.</Text>
            </View>
          </View>
          <View className="flex-row items-center justify-center ">
            <View className="w-full">
              <View className="mb-8 mx-3 flex-row justify-between gap-5 rounded-lg border border-Border dark:border-dark-Border py-3 px-16 lg:border-0">
                <Pressable
                  onPress={openLoginTab}
                  className={`cursor-pointer !z-[100]`}
                >
                  <Text className={`relative text-lg font-medium  ${loginTabOpen?'text-dark-Primary-text':'text-Primary-text dark:text-dark-Primary-text'}`}>Log in</Text>
                </Pressable>
               
                <Pressable
                  onPress={closeLoginTab}
                  className={`cursor-pointer relative !z-[100]`}
                >
                  <Text className={`text-lg font-medium  ${loginTabOpen?'text-Primary-text dark:text-dark-Primary-text':'text-dark-Primary-text'}`}>Sign up</Text>
                </Pressable>
                <View className={`h-[48px] w-[170px] lg:h-0.75 rounded-lg lg:w-45 lg:rounded-full bg-Accent absolute bottom-0 ${loginTabOpen? 'left-0':'right-0'}`}>
                </View>
              </View>
              <View className="w-100">
                {loginTabOpen? <Login />:<Signup/>}
                 <View className="my-4 relative before:absolute before:top-[50%] before:left-0 before:w-[35%] before:h-0.5 before:bg-Surface2 dark:before:bg-dark-Surface2 before:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[35%] after:h-0.5 after:bg-Surface2 dark:after:bg-dark-Surface2 after:content-['']">
                    <Text className="text-center text-sm text-Secondary-text">or continue with</Text>
                  </View>
                  <View className="flex-row justify-center gap-2">
                    <GoogleButton/>
                    <FacebookButton />
                    <AppleButton />
                  </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  )
}

export default Auth
