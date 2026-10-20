import { CheckCircleIcon, WarningIcon, XIcon } from "@phosphor-icons/react"
import { motion } from "framer-motion"
import { useIsMobile } from "../../hooks/useIsMobile.ts"

type toastProps = {
    type: "success" | "warning" | "error",
    message: string
}

function Toast({toastProps}: {toastProps:toastProps}) {
    const isMobile = useIsMobile();
  return (
    <motion.div 
        initial={{opacity: 0, y: isMobile? -20:20}}
        animate={{opacity: 1, y:0}}
        exit={{opacity: 0,  y: isMobile? -20:20}}
        className="fixed z-1000 bottom-[90%] right-[5%] left-[5%] md:bottom-10 md:right-20 md:left-auto flex gap-1 items-center bg-Background dark:bg-dark-Surface2 shadow-Border shadow-lg dark:shadow-none rounded-lg px-6 py-2 text-Primary-text dark:text-dark-Primary-text">
        {toastProps.type==="success" && (
            <div className="text-Accent"><CheckCircleIcon size={30} weight="fill"/></div>
        )}
         {toastProps.type==="warning" && (
            <div className="text-yellow-300"><WarningIcon size={30} weight="fill"/></div>
        )}
        {toastProps.type==="error" && (
            <div className="text-red-600"><XIcon size={30} weight="bold"/></div>
        )}
        <p className="text-lg">{toastProps.message}</p>
    </motion.div>
  )
}

export default Toast