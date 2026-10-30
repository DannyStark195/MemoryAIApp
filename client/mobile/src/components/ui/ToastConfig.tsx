import {ToastConfigParams} from 'react-native-toast-message'
import { View, Text } from "react-native";
import { Feather, Ionicons, Octicons } from "@/components/icons";
const toastConfig = {
  success: ({ text1 }: ToastConfigParams<any>) => (
    <View
      className="absolute z-[1000] top-[10%] mx-6 flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-4 py-3"
    >
       <Octicons name="check-circle-fill" size={24} className="text-Accent" />
       <Text className="base-text">{text1}</Text>
    </View>
  ),
  warning: ({ text1 }: ToastConfigParams<any>) => (
    <View
      className="absolute z-[1000] top-[10%] mx-6 flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-4 py-3"
    >
       <Ionicons name="warning" size={24} className="text-yellow-600"/>
       <Text className="base-text">{text1}</Text>
    </View>
  ),
  error: ({ text1 }: ToastConfigParams<any>) => (
      <View
        className="absolute z-[1000] top-[10%] mx-6 flex-row gap-2 items-center bg-Background dark:bg-dark-Surface2 shadow-lg rounded-lg px-4 py-3"
      >
       <Feather name="x" size={24} className="text-red-600" />
       <Text className="base-text">{text1}</Text>
    </View>
  ),
}

export default toastConfig