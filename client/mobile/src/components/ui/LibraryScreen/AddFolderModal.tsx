
import { Feather } from "@/components/icons";
import {Modal, Pressable, Text, View} from "react-native"
import ActionBtn from "../ActionBtn";
type AddFolderModalProps = {
  onClose: () => void;
};

function AddFolderModal({ onClose }: AddFolderModalProps) {
    
  return (
     <Modal transparent visible animationType="fade" onRequestClose={onClose}>
       <Pressable onPress={onClose} className="flex-1 flex-row bg-black/80 justify-center items-end pb-40 lg:pb-12" style={{ zIndex: 1000, elevation: 1000 }}>
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Surface dark:bg-dark-Surface rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <View className="mb-4 relative">
            <Text className="text-2xl font-semibold base-text text-center" id="add-new-memory-folder">New Folder</Text>
            <Pressable onPress={onClose} aria-label="Close add memory folder modal" className="absolute -top-5 -right-8 cursor-pointer">
              <Feather name="x" size={18} className="base-text" />
            </Pressable>
          </View>
           <View>
            <Text className="text-center mb-5 base-text text-[1rem] font-medium">Photos</Text>
           </View>
            <View className="">
             <ActionBtn text="Add Folder" style="w-full"/>
            </View>
        </Pressable>
       </Pressable>
     </Modal>
  )
}

export default AddFolderModal
