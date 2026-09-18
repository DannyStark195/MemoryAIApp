import type { ReactElement } from "react"

type captureProp ={
  text: string,
  icon: ReactElement,
  func?: () => void
}

function QuickCaptureCard({text, icon, func}:captureProp) {
  return (
    <div onClick={func} className="rounded-full text-Primary-text dark:text-dark-Primary-text bg-Surface2 dark:bg-dark-Surface2 px-4 py-2 flex flex-col items-center gap-4 border border-Border">
        <div>
          {icon}
        </div>
        {text}
    </div>
  )
}

export default QuickCaptureCard