import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { SearchIcon } from "lucide-react"

function SearchBar({placeHolder}:{placeHolder:string}) {
  return (
    <div className="relative text-Secondary-text">
      <div className="absolute top-2.5 left-3">
        <MagnifyingGlassIcon size={18}/>
      </div>
      <form action="">
        <input type="text" className="dark:text-dark-Secondary-text px-4 pl-8 py-2 text-sm rounded-lg w-full outline-Accent md:w-55" placeholder={placeHolder}/>
      </form>
    </div>
  )
}

export default SearchBar