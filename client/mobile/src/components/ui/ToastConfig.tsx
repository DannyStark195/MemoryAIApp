import {ToastConfigParams} from 'react-native-toast-message'
import { View, Text } from "react-native";
import { Octicons, Ionicons, Feather } from "@expo/vector-icons";
const toastConfig = {
  success: ({ text1 }: ToastConfigParams<any>) => (
    <View
      className="absolute z-[1000] flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-6 py-3"
    >
       <Octicons name="check-circle-fill" size={24} color="#6A1B9A" />
       <Text className="base-text">{text1}</Text>
    </View>
  ),
  warning: ({ text1 }: ToastConfigParams<any>) => (
    <View
      className="absolute z-[1000] flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-6 py-3"
    >
       <Ionicons name="warning" size={24} color="#FCD34D" />
       <Text className="base-text">{text1}</Text>
    </View>
  ),
  error: ({ text1 }: ToastConfigParams<any>) => (
      <View
        className="absolute z-[1000] flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-6 py-3"
      >
       <Feather name="x" size={24} color="#DC2626" />
       <Text className="base-text">{text1}</Text>
    </View>
  ),
}

export default toastConfig