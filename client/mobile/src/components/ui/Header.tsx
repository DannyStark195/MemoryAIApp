import { View } from "react-native"
// import SearchBar from "./SearchBar.tsx"

function Header({children} : {children :React.ReactNode}) {
  return (
    <View className="flex flex-col justify-between gap-4 md:flex-row  mb-8">
        {children}
        {/* <SearchBar placeHolder="Search your memories..."/> */}
    </View>
  )
}

export default Header