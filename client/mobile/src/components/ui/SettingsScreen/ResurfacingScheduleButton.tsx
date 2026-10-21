import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@/components/icons";

function ResurfacingScheduleButton() {
    const [resurfacingModalOPen, setresurfacingModalOPen] = useState(false);
        function toggleResurfacingModal(){
            setresurfacingModalOPen(prev => !prev)
        }
  return (
    <Pressable className="flex-row items-center bg-Accent py-2 px-2 rounded-lg relative" onPress={toggleResurfacingModal}>
       <View className="flex-row items-center gap-2">
            <Text className="text-dark-Primary-text  leading-6">Automatic (AI mode)</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} className="text-dark-Primary-text"/>
        </View>
        <View className={`absolute bottom-14 flex flex-col gap-2 right-1 w-80 py-3 px-3 rounded-md bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none ${resurfacingModalOPen? '': 'hidden'}`}>
            <Pressable className="flex-row items-center gap-2  hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View className="">
                    <Ionicons name="radio-button-off" size={32} className="text-Accent"/>
                </View>
                <View>
                    <Text className="font-semibold mb-0.5 text-Primary-text dark:text-dark-Primary-text ">Automatic</Text>
                    <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">Based on your activities & patterns</Text>
                </View>
            </Pressable>
           <Pressable className="flex-row items-center gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View>
                    <Ionicons name="radio-button-off" size={32} className="text-Accent"/>
                </View>
                <View>
                    <Text className="font-semibold mb-0.5 text-Primary-text dark:text-dark-Primary-text  ">Morning</Text>
                    <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6AM-12PM</Text>
                </View>
            </Pressable>
           <Pressable className="flex-row items-center gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View>
                    <Ionicons name="radio-button-off" size={32} className="text-Accent"/>
                </View>
                <View>
                    <Text className="font-semibold mb-0.5 text-Primary-text dark:text-dark-Primary-text ">Afternoon</Text>
                    <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">12PM-6PM</Text>
                </View>
            </Pressable>
            <Pressable className="flex-row items-center gap-2  hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <View>
                    <Ionicons name="radio-button-off" size={32} className="text-Accent"/>
                </View>
                <View>
                    <Text className="font-semibold mb-0.5 text-Primary-text dark:text-dark-Primary-text ">Evening</Text>
                    <Text className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6PM-12AM</Text>
                </View>
            </Pressable>
        </View>
    </Pressable>
  )
}

export default ResurfacingScheduleButton