import {FontAwesome5} from "@expo/vector-icons"
import { Pressable } from "react-native"

function AppleButton() {
  return (
    <Pressable className="bg-Surface dark:bg-dark-Surface border border-Surface dark:border-dark-Surface2 rounded-md cursor-pointer px-8 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent hover:text-dark-Primary-text active:text-dark-Primary-text dark:text-dark-Secondary-text">
        <FontAwesome5 name="apple" size={24} className="text-Primary-text dark:text-dark-Secondary-text hover:text-dark-Primary-text active:text-dark-Primary-text" />
    </Pressable>
  )
}

export default AppleButton