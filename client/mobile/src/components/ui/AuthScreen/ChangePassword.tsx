import { EvilIcons, MaterialIcons, SimpleLineIcons } from "@/components/icons";
import { Pressable, TextInput, View, Text } from "react-native"

function ChangePassword({email}:{email:string}) {
  return (
    <View className="my-4 flex flex-col gap-4">
        <View className="relative">
            <View className="absolute top-2 left-3">
                <EvilIcons name="envelope" size={24} className="base-text" />
            </View>
            <TextInput keyboardType="email-address" placeholder="Email" value={email} className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-base-reverse text-[1rem] "/>
        </View>
         <View className="relative">
            <View className="absolute top-2.5 left-3">
            <MaterialIcons name="password" size={24} className="base-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="Code" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-base-reverse text-[1rem] "/>
        </View>
        <View className="relative">
            <View className="absolute top-2.5 left-3">
                <SimpleLineIcons name="lock" size={17} className="base-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="New password" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-base-reverse text-[1rem] "/>
        </View>
        <View className="relative">
            <View className="absolute top-2.5 left-3">
                <SimpleLineIcons name="lock" size={17} className="base-text" />
            </View>
            <TextInput secureTextEntry={true} placeholder="Confirm New password" className="w-full py-2.5 px-2 pl-10 border border-Surface2 dark:border-dark-Surface2 rounded-md text-base-reverse text-[1rem] "/>
        </View>
        <Pressable className="bg-dark-Background dark:bg-Background py-2.5 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
            <Text className="text-dark-Primary-text dark:text-Primary-text font-semibold text-center text-[1rem] active:text-dark-Primary-text">
                Change password
            </Text>
        </Pressable>
    </View>
  )
}

export default ChangePassword