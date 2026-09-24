import { FacebookLogoIcon } from "@phosphor-icons/react"

function FacebookButton() {
  return (
    <button className="border border-Border rounded-md p-2 px-8 cursor-pointer hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent">
        <FacebookLogoIcon size={25} weight="bold"/>
    </button>
  )
}

export default FacebookButton