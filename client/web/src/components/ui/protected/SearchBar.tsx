import { SearchIcon } from "lucide-react"

function SearchBar({placeHolder}:{placeHolder:string}) {
  return (
    <div className="relative text-Secondary-text">
      <div className="absolute top-3.5 left-3">
        <SearchIcon size="20" className=""/>
      </div>
      <input type="text" className="px-6 pl-10 py-3 text-medium border-Border border rounded-xl w-[90%] md:w-90" placeholder={placeHolder}/>
    </div>
  )
}

export default SearchBar