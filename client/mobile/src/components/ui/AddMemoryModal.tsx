
import { useRef } from "react";
import { Pressable, View, Text, TextInput, Modal} from "react-native"
import { useState } from "react";
type AddMemoryModalProps = {
  onClose: () => void;
};

function AddMemoryModal({ onClose }: AddMemoryModalProps) {
      const [input, setInput] = useState("");
      const [inputHeight, setInputHeight] = useState(40);
      const canSend = input.trim().length > 0;
  return (
     <Pressable onPress={onClose} className="fixed inset-0 z-999 bg-black/80 flex justify-center items-end pb-40 lg:pb-12">
        <Pressable onPress={(event) => event.stopPropagation()} className="bg-Background dark:bg-dark-Background rounded-lg px-10 py-8 w-[90%] lg:w-180">
          <View className="mb-6 relative">
            <Text className="text-xl text-center base-text">New Memorii</Text>
            <Pressable onPress={onClose} className="absolute -top-2 -right-8 cursor-pointer"><XIcon size={14}/></Pressable>
          </View>
          <form action="">
            <View className="relative mb-4">
              <TextInput keyboardType="email-address" placeholder="Title (e.g React cheet codes)" className="w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"/>
              <Text className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</Text>
            </View>
            <View className="mb-4">
                <TextInput
                    placeholder="Memory content. Brief description of the memory"
                    className="max-h-50 min-h-20 text-sm overflow-y-auto resize-none w-full py-2 px-4 border border-Surface2 dark:border-dark-Surface2 rounded-md outline-0"
                    multiline
                    onChangeText={setInput}
                    onContentSizeChange={(event) =>
                      setInputHeight(Math.min(Math.max(event.nativeEvent.contentSize.height, 40), 112))
                    }
                    // onSubmitEditing={send}
                    placeholderTextColor="#99958D"
                    returnKeyType="send"
                    style={{ height: inputHeight }}
                    textAlignVertical="center"
                    value={input}
                />
                <Text className="text-sm my-1.5 ml-2 text-Secondary-text dark:text-dark-Secondary-text">Optional (if empty AI chooses automatically)</Text>

            </View>
            <View className="flex gap-3">
              <Pressable
                accessibilityLabel="Send message"
                accessibilityRole="button"
                className="bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-2 px-4 rounded-lg cursor-pointer w-full hover:bg-Accent"><Text className="base-text-reverse">Save Memorii</Text></Pressable>
            </View>
          </form>
        </Pressable>
      </Pressable>
  )
}

export default AddMemoryModal
