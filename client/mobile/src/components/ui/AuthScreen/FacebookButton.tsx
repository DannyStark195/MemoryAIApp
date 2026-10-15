import {FontAwesome5} from "@expo/vector-icons/"
import { Pressable } from "react-native"

function FacebookButton() {
  return (
    <Pressable className="flex items-center justify-center bg-Surface dark:bg-dark-Surface border border-Surface dark:border-dark-Surface2 rounded-md cursor-pointer py-2 px-9 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent ">
        <FontAwesome5 name="facebook" size={24} className="text-Primary-text dark:text-dark-Secondary-text hover:text-dark-Primary-text active:text-dark-Primary-text" />
    </Pressable>
  )
}

export default FacebookButton