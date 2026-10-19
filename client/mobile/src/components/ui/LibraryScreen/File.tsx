
import { type Memory } from "@/types/model"
import { Feather, MaterialIcons } from "@/components/icons";
import { Text, View } from "react-native"

function File({fileProps}: {fileProps:Memory}) {
  return (
    <View className="flex-row justify-between py-4 px-2 rounded-md cursor-pointer items-center mb-3 transition-all duration-300  hover:bg-Surface2 dark:hover:bg-dark-Surface2">
        <View className="flex-row gap-3 items-center">
            <View className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                <Feather name="file" size={25} className="text-Accent"/>
            </View>
            <View>
                <Text className="font-medium text-[1.01rem] mb-1 text-Primary-text dark:text-dark-Primary-text">{fileProps.name}</Text>
                <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">{fileProps.created_at}</Text>
            </View>
        </View>

        <View className="cursor-pointer">
            <MaterialIcons name="keyboard-arrow-right" size={26} className="text-Secondary-text dark:text-dark-Secondary-text" />
        </View>
    </View>
  )
}

export default File