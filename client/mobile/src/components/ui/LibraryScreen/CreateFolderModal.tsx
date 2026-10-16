
import { Feather } from "@expo/vector-icons";
import {Pressable, Text, TextInput, View} from "react-native"
import Toast
 from "react-native-toast-message";
type createFolderModalProps = {
  onClose: () => void;
};

function createFolderModal({ onClose }: createFolderModalProps) {
  return (
     <Pressable
        onPress={onClose} className="fixed inset-0 !z-[1000] bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <div className="mb-6 text-center relative">
            <h3 className="text-xl" id="create-new-memory-folder">Create Folder</h3>
            <Pressable onPress={onClose} aria-label="Close create memory folder modal" className="absolute -top-2 -right-8 cursor-pointer">
              <Feather name="x" size={24} className="base-text" />
            </Pressable>
          </div>
             <div className="relative mb-4">
              <TextInput placeholder="Title (e.g Programming or Technology)" className="w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
              <p className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</p>
            </div>
            
            <div className="flex gap-3">
              <Pressable onPress={()=> {
                onClose()
                Toast.show({type: "error", text1:"Folder created!"})}} className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                  <Text className="base-text">
                    Create Folder
                  </Text>
              </Pressable>
            </div>
        </Pressable>
      </Pressable>
  )
}

export default createFolderModal
