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

     <View className="relative">
                     <View className="absolute top-3 left-3">
                                   <Feather name="search" size={14} className="text-Tertiary-text dark:text-dark-Tertiary-text"/>

                     </View>
                     <TextInput
                        //  keyboardType="email-address"
                         placeholder={placeHolder}
                         placeholderTextColor={inputTextColor}
                         value={search}
                         onChangeText={setSearch}
                         className="w-full py-2 px-2 pl-10 focus:border-2 rounded-full text-sm base-text border border-Surface2 dark:border-dark-Surface2"
                         style={{ color: inputTextColor }}
                     />
                 </View>
      
    </View>
  )
}

export default SearchBar