import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { useEffect, useRef, useState } from "react"
import { getFolders } from "../../../api/getFolders.ts"
import { type Memory } from "../../../types/model.ts"
import File from "./LibraryPage/File.tsx"
import NotificationBell from "../NotificationBell.tsx"

type SearchMemory = {
  memory: Memory
  folderName: string
}

type SearchProps = {
  placeHolder: string
  func?: () => void
}

function SearchBar({ placeHolder, func }: SearchProps) {
  const [query, setQuery] = useState("")
  const [memories, setMemories] = useState<SearchMemory[]>([])
  const [overlayTop, setOverlayTop] = useState(0)
  const [overlayLeft, setOverlayLeft] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const isOpen = query.trim().length > 0

  useEffect(() => {
    let isCurrent = true

    getFolders().then((folders) => {
      if (!isCurrent) return
      setMemories(folders.flatMap((folder) =>
        folder.files.map((file) => ({ memory: file as Memory, folderName: folder.name }))
      ))
    }).catch((error: unknown) => {
      console.error("Unable to load memories for search", error)
    })

    return () => { isCurrent = false }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const updateOverlayPosition = () => {
      const input = inputRef.current
      if (input) {
        setOverlayTop(input.getBoundingClientRect().bottom)
        const contentPane = input.closest<HTMLElement>("[data-content-pane]")
        setOverlayLeft(contentPane?.getBoundingClientRect().left ?? 0)
      }
    }

    updateOverlayPosition()
    window.addEventListener("resize", updateOverlayPosition)
    window.addEventListener("scroll", updateOverlayPosition, true)
    return () => {
      window.removeEventListener("resize", updateOverlayPosition)
      window.removeEventListener("scroll", updateOverlayPosition, true)
    }
  }, [isOpen])

  const normalizedQuery = query.trim().toLocaleLowerCase()
  const results = memories.filter(({ memory, folderName }) =>
    `${memory.name} ${memory.category} ${folderName}`.toLocaleLowerCase().includes(normalizedQuery)
  )

  function closeSearch() {
    setQuery("")
    inputRef.current?.blur()
  }

  return (
    <div className="flex gap-2">
      <div className="mt-1 text-Secondary-text hidden">
        <NotificationBell />
      </div>

      <div className="relative text-Secondary-text flex-1">
        <div className="absolute top-2.5 left-3 pointer-events-none">
          <MagnifyingGlassIcon size={18} />
        </div>
        <form action="" onSubmit={(event) => { event.preventDefault(); func?.() }}>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Escape") closeSearch() }}
            className="dark:text-dark-Secondary-text px-4 pl-10 py-2 text-sm rounded-full flex-1 w-[97%] outline-Accent focus-visible:border-Accent md:w-full"
            placeholder={placeHolder}
            aria-label={placeHolder}
            aria-expanded={isOpen}
          />
        </form>
      </div>

      {isOpen && (
        <div
          className="fixed right-0 bottom-0 z-40 overflow-y-auto bg-Background/95 px-4 py-4 backdrop-blur-sm dark:border-dark-Surface2 dark:bg-dark-Background/95 md:px-8"
          style={{ top: overlayTop, left: overlayLeft }}
          role="region"
          aria-label="Memory search results"
        >
          {results.length > 0 ? (
            <div className="mx-auto w-full max-w-5xl">
              {results.map(({ memory, folderName }) => (
                <div key={`${folderName}-${memory.id}`} onClick={closeSearch}>
                  <File fileProps={memory} />
                </div>
              ))}
            </div>
          ) : (
            <p className="pt-8 text-center text-sm text-Secondary-text dark:text-dark-Secondary-text">
              No memories found for “{query.trim()}”.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
