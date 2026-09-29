import {createContext, useContext, useState, useEffect, type ReactNode} from 'react'

type toastProps = {
    type: "success" | "warning" | "error",
    message: string
}

type toastContextType ={
    showToast: (toast:toastProps) => void,
    hideToast: () => void
}
export const ToastContext = createContext<toastContextType|null>(null)

export function ToastProvider({children}: {children: ReactNode}){
    const [currentToast, setCurrentToast] = useState<toastProps|null>();

    function showToast(toast:toastProps){
        setCurrentToast(toast)
    }
    function hideToast(){
        setCurrentToast(null)
    }

    return (
        <ToastContext.Provider value={{showToast,hideToast}}>
            {children}
        </ToastContext.Provider>
    )
}

