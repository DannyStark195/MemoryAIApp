import { useState } from "react"
import Logo from "../components/ui/Logo"
import ScreenLayout from "../components/ui/ScreenLayout"
// import { useToast } from "../context/ToastContext"
import { MaterialIcons } from "@/components/icons";
import { Pressable, View, Text, TextInput } from "react-native"
import {useColorScheme} from "nativewind"
import {colors} from "@/theme/colors"
import ActionBtn from "@/components/ui/ActionBtn"

function VerifyOtp() {
   const { colorScheme } = useColorScheme();
    const inputTextColor =
        colorScheme === "dark"
            ? colors.dark["Secondary-text"]
            : colors.light["Secondary-text"];
  const [forgotPasswordTab, setforgotPasswordTab] = useState(true)
  // const {showToast} = useToast()
  function verifyCode(){
    setforgotPasswordTab(false)
  }
  return (
    <ScreenLayout >
      <View>
        <View className="flex flex-col justify-center gap-4 lg:justify-start lg:flex-row min-h-dvh">
          <View className="lg:w-[50%] lg:flex items-center justify-center mb-4">
            <View className="flex flex-col items-center">
              <View>
                <Logo classname="!w-[80px] !h-[80px]"/>
              </View>
              <Text className="text-xl lg:text-5xl font-semibold mt-1 lg:mb-2 base-text">Memorii</Text>
              <Text className="lg:text-lg base-text text-[1rem]">Your memories organized beautifully.</Text>
            </View>
          </View>
          <View className="lg:flex-1 flex items-center justify-center ">
            <View className="w-full">
              <View className="w-100">
                  <View>
                    <Text className="text-3xl font-bold mb-2.5 base-text">Verify Code</Text>
                    <Text className="mb-10 text-Secondary-text dark:text-dark-Secondary-text">We sent a code your email.</Text>

                    <View className="w-full">
                        <View className="relative flex flex-col gap-4">
                            <View className="absolute top-2.5 left-3">
                                <MaterialIcons
                                    name="password"
                                    size={24}
                                    className="base-text"
                                />
                            </View>
                            <TextInput
                                secureTextEntry={true}
                                placeholder="Code"
                                placeholderTextColor={inputTextColor}
                                className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-[1rem] base-text mb-4"
                            />
                        </View>
                      </View>
                         <ActionBtn text="Verify" actionFunc={verifyCode} style="w-full"/>
                    </View>
                    <View className="flex-row items-center gap-1 mt-4">

                      <Text className="text-sm base-text">
                        Didn't recieve code?    
                      </Text>
                          
                            <Pressable 
                            onPress={()=>{
                              // showToast({type:"success", message:"Verification code resent!"})
                            }} 
                            >
                                <Text className="text-Accent font-medium">Resend code</Text>
                            </Pressable>
                    </View>
                  </View>
              </View>
            </View>
          </View>
        </View>
    </ScreenLayout>
  )
}

export default VerifyOtp
