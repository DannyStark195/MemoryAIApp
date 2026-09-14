import { type ReactNode } from "react"
import SearchBar from "./SearchBar.tsx"

function Header({children} : {children :ReactNode}) {
  return (
    <div>
        {children}
        <SearchBar />
    </div>
  )
}

export default Header