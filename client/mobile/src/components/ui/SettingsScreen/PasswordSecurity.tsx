import ScreenLayout from "@/components/ui/ScreenLayout"
import BackButton from "@/components/ui/BackButton"
import ChangePassword from "@/components/ui/AuthScreen/ChangePassword"
import { useState } from "react"
import { Text, View, Pressable } from "react-native"
import ActionBtn from "../ActionBtn"

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
                <ActionBtn text="Send reset code" style="text-[1rem]" actionFunc={sendResetLink}/>
              </View>
              :
                <ChangePassword email=""/>

          }
        </View>
   </ScreenLayout>
  )
}

export default PasswordSecurity