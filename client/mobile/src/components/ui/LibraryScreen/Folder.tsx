import { type FolderType } from "@/types/model"
import {MaterialIcons} from "@expo/vector-icons"
import { View, Text, Pressable } from "react-native"
import {router, Link} from "expo-router"

function Folder({name, files}: FolderType) {
  return (
      <Pressable onPress={() => router.push({pathname: "/folder-detail/[name]", params: { name: name },})}>
        <View className="relative px-6 py-4 rounded-md w-full flex flex-row justify-between items-center">
                  <View className="flex flex-row gap-4">
                      <View className="bg-Accent-hover dark:bg-dark-Surface2 py-2 px-2 rounded-md text-Accent">
                          <MaterialIcons name="folder" size={32} className="text-Accent"/>
                      </View>
                      <View>
                          <Text className="text-[1rem] font-semibold text-Primary-text dark:text-dark-Primary-text mb-1.5">{name}</Text>
                          <Text className="text-sm text-Primary-text dark:text-dark-Primary-text font-medium">{files.length} memories</Text>
                      </View>
                  </View>

          </View>
    </Pressable>
  )
}
export default Folder
