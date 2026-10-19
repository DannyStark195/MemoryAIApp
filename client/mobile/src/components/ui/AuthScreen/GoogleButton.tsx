import { FontAwesome } from "@/components/icons";
import { Pressable } from "react-native"

function GoogleButton() {
  return (
    <Pressable className="flex items-center justify-center bg-Surface dark:bg-dark-Surface border border-Surface dark:border-dark-Surface2 rounded-md cursor-pointer px-9 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent ">
        <FontAwesome name="google" size={24} className="hover:text-dark-Primary-text active:text-dark-Primary-text text-Primary-text dark:text-dark-Secondary-text" />
    </Pressable>
  )
}

export default GoogleButton
