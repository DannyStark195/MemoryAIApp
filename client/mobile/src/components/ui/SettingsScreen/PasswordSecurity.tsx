import ScreenLayout from "@/components/ui/ScreenLayout"
import BackButton from "@/components/ui/BackButton"
import ChangePassword from "@/components/ui/AuthScreen/ChangePassword"
import { useState } from "react"
import { Text, View, Pressable } from "react-native"

function PasswordSecurity() {
  const [passwordChangeFormOpen, setPasswordChangeFormOpen] = useState(false)

  function sendResetLink(){
    setPasswordChangeFormOpen(true)
  }
  return (
   <ScreenLayout>
     <View className="flex-row justify-between mb-8">
            <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Password & Security</Text>
            <BackButton />
      </View>
        <View>
          <Text className="text-lg font-medium text-Primary-text dark:text-dark-Primary-text">Change Password</Text>
          {
            !passwordChangeFormOpen? 
              <View>
                <Text className="my-4 mb-6 text-Secondary-text dark:text-dark-Secondary-text text-[1rem]">
                  A reset code will be sent to our email
                </Text>
                <Pressable onPress={sendResetLink} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2.5 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                    <Text className="text-dark-Primary-text dark:text-Primary-text font-semibold text-center text-[1rem]">
                      Send reset code
                    </Text>
                </Pressable>
              </View>
              :
                <ChangePassword email=""/>

          }
        </View>
   </ScreenLayout>
  )
}

export default PasswordSecurity