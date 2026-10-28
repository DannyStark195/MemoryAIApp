import { MagnifyingGlassIcon, } from "@phosphor-icons/react"
import NotificationBell from "../NotificationBell.tsx"


type searchProps ={
  placeHolder: string, 
  func?: ()=> void
}
function SearchBar({placeHolder, func}:searchProps) {
  return (
    <div className="flex gap-2">
      <div className="mt-1 text-Secondary-text hidden">
          <NotificationBell />
      </div>

      <div className="relative text-Secondary-text flex-1">
        <div className="absolute top-2.5 left-3">
          <MagnifyingGlassIcon size={18}/>
        </div>
        <form action="" onSubmit={func}>
          <input type="text" className="dark:text-dark-Secondary-text px-4 pl-10 py-2 text-sm rounded-full flex-1 w-[97%] outline-Accent focus-visible:border-Accent md:w-full" placeholder={placeHolder}/>
        </form>
      </div>
      
    </div>
  )
}

export default SearchBar