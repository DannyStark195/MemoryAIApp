import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router";
import ScreenLayout from "@/components/ui/ScreenLayout";

function FolderDetail() {
  const { name } = useLocalSearchParams<{name: string}>();
  return (
    <ScreenLayout>
      <View className="flex-1 justify-center items-center">
        <Text className="text-Primary-text dark:text-dark-Primary-text text-lg font-semibold">Folder Detail {name} </Text>
      </View>
    </ScreenLayout>
  )
}

export default FolderDetail