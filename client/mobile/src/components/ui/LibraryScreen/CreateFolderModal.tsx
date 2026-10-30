
import { Feather } from "@/components/icons";
import {Modal, Pressable, Text, TextInput, View} from "react-native"
import Toast from "react-native-toast-message";
import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";
import ActionBtn from "@/components/ui/ActionBtn"
type createFolderModalProps = {
  onClose: () => void;
};

function createFolderModal({ onClose }: createFolderModalProps) {
    const { colorScheme } = useColorScheme();
    const inputTextColor =
        colorScheme === "dark"
            ? colors.dark["Secondary-text"]
            : colors.light["Secondary-text"];

  return (
     <Modal transparent visible animationType="fade" onRequestClose={onClose}>
       <Pressable onPress={onClose} className="flex-1 flex-row bg-black/80 justify-center items-end pb-40 lg:pb-12" style={{ zIndex: 1000, elevation: 1000 }}>
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Surface dark:bg-dark-Surface rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <View className="mb-6 relative">
            <Text className="text-2xl text-center base-text font-semibold" id="create-new-memory-folder base-text">Create Folder</Text>
            <Pressable onPress={onClose} aria-label="Close create memory folder modal" className="absolute -top-4 -right-8 cursor-pointer">
              <Feather name="x" size={18} className="base-text" />
            </Pressable>
          </View>
             <View className="relative mb-4">
              <TextInput placeholderTextColor={inputTextColor} placeholder="Title (e.g Programming or Technology)" className="w-full py-2.5 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem] base-text font-medium"/>
              <Text className="text-sm my-1.5 ml-2 text-Tertiary-text dark:text-dark-Tertiary-text text-[1rem] font-medium">Optional (if empty AI chooses automatically)</Text>
            </View>
            
            <View className="flex-row gap-3">
              <ActionBtn 
                text="Create Folder" 
                actionFunc={() =>{
                   Toast.show({type:"success", text1:"Folder created"})
                   onClose()
                }} 
                style="w-full"/>
            </View>
        </Pressable>
       </Pressable>
     </Modal>
  )
}

export default createFolderModal
