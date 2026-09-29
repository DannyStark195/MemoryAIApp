import { CheckCircleIcon, WarningIcon, XIcon } from "@phosphor-icons/react"

type toastProps = {
    type: "success" | "warning" | "error",
    message: string
}

function Toast({type, message}: toastProps) {
  return (
    <div className="fixed bottom-10 right-20 flex gap-4 bg-Surface2 dark:bg-dark-Surface2 rounded-lg px-4 py-2">
        {type==="success" && (
            <div className="text-Accent"><CheckCircleIcon size={20} weight="fill"/></div>
        )}
         {type==="warning" && (
            <div className="text-yellow-300"><WarningIcon size={20} weight="fill"/></div>
        )}
        {type==="error" && (
            <div className="text-red-600"><XIcon size={20} weight="bold"/></div>
        )}
        <p>{message}</p>
    </div>
  )
}

export default Toast