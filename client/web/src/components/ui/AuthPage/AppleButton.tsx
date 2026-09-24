import { AppleLogoIcon } from "@phosphor-icons/react"

function AppleButton() {
  return (
    <button className="border border-Border rounded-md p-2 cursor-pointer px-8 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent hover:text-dark-Primary-text active:text-dark-Primary-text">
        <AppleLogoIcon size={25} weight="fill"/>
    </button>
  )
}

export default AppleButton