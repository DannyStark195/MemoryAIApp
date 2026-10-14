import { useState } from "react";
import { Pressable, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function ResurfacingScheduleButton() {
    const [resurfacingModalOPen, setresurfacingModalOPen] = useState(false);
        function toggleResurfacingModal(){
            setresurfacingModalOPen(prev => !prev)
        }
  return (
    <Pressable className="flex items-center bg-Accent-hover dark:bg-dark-Accent-hover py-2 px-4 rounded-lg relative" onPress={toggleResurfacingModal}>
        Automatic (AI mode)
        <MaterialIcons name="keyboard-arrow-right" size={24} />
        <View className={`absolute bottom-12 flex flex-col gap-2 right-0 w-80 py-3 px-3 rounded-md bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none ${resurfacingModalOPen? '': 'hidden'}`}>
            <Pressable className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View className="text-Accent">
                    <Ionicons name="radio-button-off" size={24} color="black" />
                </View>
                <View>
                    <View className="font-semibold mb-0.5">Automatic</View>
                    <View className="text-sm text-Secondary-text dark:text-dark-Secondary-text">Based on your activities & patterns</View>
                </View>
            </Pressable>
           <Pressable className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View className="text-Accent">
                    <Ionicons name="radio-button-off" size={24} color="black" />
                </View>
                <View>
                    <View className="font-semibold mb-0.5">Morning</View>
                    <View className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6AM-12PM</View>
                </View>
            </Pressable>
           <Pressable className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View className="text-Accent">
                    <Ionicons name="radio-button-off" size={24} color="black" />
                </View>
                <View>
                    <View className="font-semibold mb-0.5">Afternoon</View>
                    <View className="text-sm text-Secondary-text dark:text-dark-Secondary-text">12PM-6PM</View>
                </View>
            </Pressable>
            <Pressable className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View className="text-Accent">
                    <Ionicons name="radio-button-off" size={24} color="black" />
                </View>
                <View>
                    <View className="font-semibold mb-0.5">Evening</View>
                    <View className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6PM-12AM</View>
                </View>
            </Pressable>
        </View>
    </Pressable>
  )
}

export default ResurfacingScheduleButton