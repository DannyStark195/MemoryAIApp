import { Foundation, Ionicons, AntDesign, FontAwesome6, EvilIcons} from "@expo/vector-icons";
import {View, Text, Image, Pressable, TextInput} from "react-native";


type searchProps ={
  placeHolder: string, 
  func?: ()=> void
}
function SearchBar({placeHolder, func}:searchProps) {
  return (
    <View className="flex gap-2">
      <View className="mt-1 text-Secondary-text hidden">
          {/* <NotificationBell /> */}
      </View>

      <View className="relative text-Tertiary-text flex-1">
        <View className="absolute top-1.5 left-2">
          <EvilIcons name="search" size={24} className="dark:text-dark-Tertiary-text"/>
        </View>
        <TextInput
                // value={title}
                onChangeText={func}
                placeholder={placeHolder}
                className="dark:text-dark-Tertiary-text px-4 pl-10 py-2 text-sm rounded-lg flex-1 w-[95%] outline-Accent md:w-full"
                />
      </View>
      
    </View>
  )
}

export default SearchBar