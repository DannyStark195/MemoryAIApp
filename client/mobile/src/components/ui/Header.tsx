import { View } from "react-native"
import SearchBar from "./SearchBar"

function Header({children} : {children :React.ReactNode}) {
  return (
    <View className="flex justify-between gap-4 md:flex-row mb-12">
        {children}
        <SearchBar placeHolder="Search your memories..."/>
    </View>
  )
}

export default Header