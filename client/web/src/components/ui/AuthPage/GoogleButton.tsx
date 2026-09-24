import { GoogleLogoIcon } from "@phosphor-icons/react"

function GoogleButton() {
  return (
    <button className="border border-Border rounded-md cursor-pointer px-8 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent">
        <GoogleLogoIcon size={25} weight="bold"/>
    </button>
  )
}

export default GoogleButton