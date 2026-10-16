
import { Feather } from "@expo/vector-icons";
import {Pressable, Text, View} from "react-native"
type AddFolderModalProps = {
  onClose: () => void;
};

function AddFolderModal({ onClose }: AddFolderModalProps) {
    
  return (
     <Pressable
        onPress={onClose} className="fixed inset-0 !z-[999] bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <View className="mb-6 text-center relative">
            <Text className="text-xl" id="add-new-memory-folder">New Folder</Text>
            <Pressable onPress={onClose} aria-label="Close add memory folder modal" className="absolute -top-2 -right-8 cursor-pointer">
              <Feather name="x" size={24} className="text-red-600" />
            </Pressable>
          </View>
           <View>
            <Text className="text-center mb-4 base-text">Photos</Text>
           </View>
            <View className="">
              <Pressable className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                <Text className="base-text text-[1rem]">
                  Save Folder
                </Text>
              </Pressable>
            </View>
        </Pressable>
      </Pressable>
  )
}

export default AddFolderModal
