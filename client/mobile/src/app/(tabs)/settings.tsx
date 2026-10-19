import ScreenLayout from '@/components/ui/ScreenLayout'
import { ScrollView, Text, View, Pressable, Alert } from 'react-native'
import SettingsCard from "@/components/ui/SettingsScreen/SettingsCard"
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome5,
  FontAwesome6,
  SimpleLineIcons,
} from "@/components/icons";

function settings() {
  return (
     
    <ScreenLayout>
       <Pressable
         onPress={() => Alert.alert("Working", "Settings screen receives touches")}
         style={{
           backgroundColor: "red",
           padding: 20,
           margin: 20,
           zIndex: 9999,
         }}
       >
         <Text style={{ color: "white" }}>TEST TOUCH</Text>
       </Pressable>
      <Text className="text-xl md:text-xl font-medium leading-wider mb-2 text-Primary-text dark:text-dark-Primary-text">Settings</Text>
      <View className="mt-8">
        <ScrollView>
           <Pressable
             onPress={() => Alert.alert("Working", "ScrollView receives touches")}
             style={{ backgroundColor: "blue", padding: 20 }}
           >
             <Text style={{ color: "white" }}>TEST INSIDE SCROLLVIEW</Text>
           </Pressable>
          <View className="mb-6">
             <Pressable
               onPress={() => Alert.alert("Working", "ScrollView receives touches")}
               style={{ backgroundColor: "blue", padding: 20 }}
             >
               <Text style={{ color: "white" }}>TEST INSIDE VIEW</Text>
             </Pressable>
                <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text font-medium">Account</Text>
                <View className="rounded-lg my-4 ">
                 <SettingsCard text="Account Information" link="account-info" icon={
                    <FontAwesome6 name="user" size={18} className="text-Accent"  />
                 }
                 />
                 <SettingsCard text="Password & Security" link="password-security" icon={
                    <SimpleLineIcons name="lock" size={18} className="text-Accent" />
                 }/>
                 <SettingsCard text="Preferences" link="preferences" icon={
                    <EvilIcons name="gear" size={24} className='text-Accent'/>
                 }/>
                </View>     
          </View>
          <View className="mb-6">
                <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text font-medium">Data</Text>
                <View className="rounded-lg my-4 ">
                 <SettingsCard text="Back up data" link="backup-data" icon={
                    <Feather name="upload" size={18} className="text-Accent" />
                 }/>
                 <SettingsCard text="Import & Export" link="import-export" icon={
                    <Entypo name="export" size={18} className="text-Accent" />
                 }/>
                </View>
              </View>
              <View className="mb-12">
                <Text className="text-[1rem] text-Primary-text dark:text-dark-Primary-text font-medium">Support</Text>
                <View className="rounded-lg my-4 ">
                 <SettingsCard text="Help & Feedback" link="help" icon={
                    <FontAwesome5 name="question-circle" size={18} className="text-Accent" />
                 }/>
                 <SettingsCard text="About" link="about" icon={
                    <AntDesign name="info-circle" size={18} className="text-Accent" />
                 }/>
                </View>
              </View>
        </ScrollView>
      </View>
    </ScreenLayout>
  )
}

export default settings