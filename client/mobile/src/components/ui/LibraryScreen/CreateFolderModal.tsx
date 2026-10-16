
import { Feather } from "@expo/vector-icons";
import {Modal, Pressable, Text, TextInput, View} from "react-native"
import Toast
 from "react-native-toast-message";
type createFolderModalProps = {
  onClose: () => void;
};

function createFolderModal({ onClose }: createFolderModalProps) {
  return (
     <Modal transparent visible animationType="fade" onRequestClose={onClose}>
       <Pressable onPress={onClose} className="flex-1 flex-row bg-black/80 justify-center items-end pb-40 lg:pb-12" style={{ zIndex: 1000, elevation: 1000 }}>
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <View className="mb-6 relative">
            <Text className="text-xl text-center base-text font-semibold" id="create-new-memory-folder base-text">Create Folder</Text>
            <Pressable onPress={onClose} aria-label="Close create memory folder modal" className="absolute -top-4 -right-8 cursor-pointer">
              <Feather name="x" size={16} className="base-text" />
            </Pressable>
          </View>
             <View className="relative mb-4">
              <TextInput placeholder="Title (e.g Programming or Technology)" className="w-full py-2.5 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0 text-[1rem] font-medium"/>
              <Text className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text text-[1rem] font-medium">Optional (if empty AI chooses automatically)</Text>
            </View>
            
            <View className="flex-row gap-3">
              <Pressable onPress={()=> {
                onClose()
                Toast.show({type: "error", text1:"Folder created!"})}} className="bg-dark-Background dark:bg-Background py-2.5 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                  <Text className="base-text text-[1rem] base-text-reverse text-center font-semibold">
                    Create Folder
                  </Text>
              </Pressable>
            </View>
        </Pressable>
       </Pressable>
     </Modal>
  )
}

export default createFolderModal
