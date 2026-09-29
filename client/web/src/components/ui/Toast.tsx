import { CheckCircleIcon, WarningIcon, XIcon } from "@phosphor-icons/react"

type toastProps = {
    type: "success" | "warning" | "error",
    message: string
}

function Toast({toastProps}: {toastProps:toastProps}) {
  return (
    <div className="fixed z-1000 bottom-[90%] right-[25%] md:bottom-10 md:right-20 flex gap-1 items-center bg-Surface2 dark:bg-dark-Surface2 rounded-lg px-6 py-2 text-Primary-text dark:text-dark-Primary-text">
        {toastProps.type==="success" && (
            <div className="text-Accent"><CheckCircleIcon size={30} weight="fill"/></div>
        )}
         {toastProps.type==="warning" && (
            <div className="text-yellow-300"><WarningIcon size={20} weight="fill"/></div>
        )}
        {toastProps.type==="error" && (
            <div className="text-red-600"><XIcon size={20} weight="bold"/></div>
        )}
        <p className="text-lg">{toastProps.message}</p>
    </div>
  )
}

export default Toast