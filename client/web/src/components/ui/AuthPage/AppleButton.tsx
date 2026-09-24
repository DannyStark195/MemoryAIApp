import { AppleLogoIcon } from "@phosphor-icons/react"

function AppleButton() {
  return (
    <button className="bg-Surface dark:bg-dark-Surface border border-Surface dark:border-dark-Surface2 rounded-md cursor-pointer px-8 hover:bg-Accent hover:border-Accent transition-all duration-300 active:bg-Accent active:border-Accent hover:text-dark-Primary-text active:text-dark-Primary-text dark:text-dark-Secondary-text">
        <AppleLogoIcon size={25} weight="fill"/>
    </button>
  )
}

export default AppleButton