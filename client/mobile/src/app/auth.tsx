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
      <View>
        <View className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row min-h-dvh">
          <View className="lg:w-[50%] lg:flex items-center justify-center mb-4">
            <View className="flex flex-col items-center">
              <View>
                <Logo classname="!w-[80px] !h-[80px] lg:w-50"/>
              </View>
              <Text className="text-xl lg:text-5xl font-semibold mt-1 lg:mb-2">Memorii</Text>
              <Text className="lg:text-lg">Your memories organized beautifully.</Text>
            </View>
          </View>
          <View className="lg:flex-1 flex-row items-center justify-center ">
            <View>
              <View className="relative mb-8 flex-row justify-between gap-5 rounded-lg border border-Border dark:border-dark-Border py-3 px-16 lg:border-0">
                <Pressable
                  onPress={openLoginTab}
                  className={`text-lg lg:text-2xl font-medium cursor-pointer relative z-1 ${loginTabOpen?'text-dark-Primary-text':'text-Primary-text dark:text-dark-Primary-text'} lg:text-Primary-text dark:lg:text-dark-Primary-text`}
                >
                  <Text>Log in</Text>
                </Pressable>
               
                <Pressable
                  onPress={closeLoginTab}
                  className={`text-lg lg:text-2xl font-medium cursor-pointer relative z-1 ${loginTabOpen?'text-Primary-text dark:text-dark-Primary-text':'text-dark-Primary-text'} lg:text-Primary-text dark:lg:text-dark-Primary-text`}
                >
                  <Text>Sign up</Text>
                </Pressable>
                <View className={` h-13 w-45 lg:h-0.75 rounded-lg lg:w-45 lg:rounded-full bg-Accent absolute bottom-0 ${loginTabOpen? 'left-0':'right-0'} transition-all duration-900`}>
                </View>
              </View>
              <View className="w-100">
                {loginTabOpen? <Login />:<Signup/>}
                 <View className="my-4 relative before:absolute before:top-[50%] before:left-0 before:w-[35%] before:h-0.5 before:bg-Surface2 dark:before:bg-dark-Surface2 before:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[35%] after:h-0.5 after:bg-Surface2 dark:after:bg-dark-Surface2 after:content-['']">
                    <Text className="text-center text-sm text-Secondary-text">or continue with</Text>
                  </View>
                  <View className="flex justify-center gap-2">
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