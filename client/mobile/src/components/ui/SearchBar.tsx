import { Feather } from "@/components/icons";
import {View, Text, Image, Pressable, TextInput} from "react-native";
import {useState} from "react"
import { colors } from "@/theme/colors";
import { useColorScheme } from "nativewind";

type searchProps ={
  placeHolder: string, 
  func?: ()=> void
}
function SearchBar({placeHolder, func}:searchProps){ 
  const [search, setSearch] = useState("");
  const { colorScheme } = useColorScheme();
  const inputTextColor =
      colorScheme === "dark"
          ? colors.dark["Tertiary-text"]
          : colors.light["Tertiary-text"];
  return (
    <View className="flex gap-2">
      <View className="mt-1 text-Secondary-text hidden">
          {/* <NotificationBell /> */}
      </View>

      <View className="relative text-Tertiary-text flex-1 ml-0.5">
        <View className="absolute top-2 left-3">
          <Feather name="search" size={18} className="text-Tertiary-text dark:text-dark-Tertiary-text"/>
        </View>
        <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder={placeHolder}
                placeholderTextColor={inputTextColor}
                className="text-Tertiary-text dark:text-dark-Tertiary-text px-4 pl-10 py-2 text-sm rounded-lg flex-1 w-[95%] outline-Accent md:w-full"
                style={{ color: inputTextColor }}
                />
      </View>
      
    </View>
  )
}

export default SearchBar