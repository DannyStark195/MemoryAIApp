import { type ReactNode } from "react"
import SearchBar from "./SearchBar.tsx"

function Header({children} : {children :ReactNode}) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
        {children}
    </div>
  )
}

export default Header