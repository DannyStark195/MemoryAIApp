import {MaterialIcons} from "@expo/vector-icons"
import { Pressable, Text } from "react-native"
function LogoutButton() {
    function logOut(){
        console.log("logged out")
        
    }
  return (
    <Pressable
        className="flex-row gap-1 items-center justify-center cursor-pointer"
        onPress={logOut}
        aria-label="logout"
    >
        <MaterialIcons name="logout" size={20} className="text-red-900" />
        <Text className="text-red-900 text-[1rem] font-medium">
            Log out
        </Text>
    </Pressable>
  )
}

export default LogoutButton