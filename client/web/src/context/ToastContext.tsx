import {createContext, useContext, useState, useEffect, type ReactNode} from 'react'
import Toast from '../components/ui/Toast'

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

    // useEffect(()=>{
    //     const timeout = setTimeout(hideToast, 5000)

    //     return () => clearTimeout(timeout)
    // }, [currentToast])
    return (
        <ToastContext.Provider value={{showToast,hideToast}}>
            {children}
            {currentToast && <Toast toastProps={currentToast}/>}
            
        </ToastContext.Provider>
    )
}

export function useToast(){
    return useContext(ToastContext)
}