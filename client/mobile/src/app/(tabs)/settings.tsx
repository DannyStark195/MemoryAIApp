import ScreenLayout from '@/components/ui/ScreenLayout'
import { ScrollView, Text, View } from 'react-native'

function settings() {
  return (
    <ScreenLayout>
      <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Settings</Text>
      <View className="mt-8 max-h-[78dvh] no-scrollbar">
        <ScrollView>
          <View className="mb-8">
                <Text className="text-md font-medium">Account</Text>
                <View className="rounded-lg my-4 ">
                 <SettingsCard text="Account Information" link="account-info" icon={
                    <UserIcon size={20}/>
                 }
                 />
                 <SettingsCard text="Password & Security" link="password-security" icon={
                    <LockIcon size={20}/>
                 }/>
                 <SettingsCard text="Preferences" link="preferences" icon={
                    <GearIcon size={20}/>
                 }/>
                </View>
                
          </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  )
}

export default settings