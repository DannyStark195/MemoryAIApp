import { type FolderType } from "@/types/model"
import { MaterialIcons } from "@/components/icons";
import { View, Text, Pressable } from "react-native"
import {router} from "expo-router"

function Folder({name, files}: FolderType) {
  return (
      <Pressable accessibilityRole="button" accessibilityLabel={`${name}, ${files.length} memories`} onPress={() => router.push({pathname: "/folder-detail/[name]", params: { name: name },})} className="active:opacity-80">
        <View className="relative w-full flex-row items-center justify-between rounded-2xl border border-Border bg-Surface px-4 py-2 dark:border-dark-Border dark:bg-dark-Surface my-2">
                  <View className="flex-row items-center gap-4">
                      <View className="rounded-xl bg-Accent-hover p-3 dark:bg-dark-Accent-hover">
                          <MaterialIcons name="folder" size={32} className="text-Accent"/>
                      </View>
                      <View>
                          <Text className="mb-1 text-base font-semibold text-Primary-text dark:text-dark-Primary-text">{name}</Text>
                          <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">{files.length} {files.length === 1 ? "memory" : "memories"}</Text>
                      </View>
                  </View>
                  <MaterialIcons name="chevron-right" size={22} className="text-Secondary-text dark:text-dark-Secondary-text" />
          </View>
    </Pressable>
  )
}
export default Folder
