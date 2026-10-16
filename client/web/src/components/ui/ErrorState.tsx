import { WarningIcon } from "@phosphor-icons/react"
import { RefreshCwIcon } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import BackButton from "./BackButton"

type errorProps = {
    title: string,
    error: string,
    action?: ()=> void
}

function ErrorState({errorProps}:{errorProps:errorProps}) {
    const navigate = useNavigate()
  return (
    <div className='flex items-center justify-center fixed top-0 w-full h-screen bg-Background dark:bg-dark-Background'>
        <div className="flex flex-col items-center w-100">
            <div className="text-red-600">
                <WarningIcon size={70}/>
            </div>
            <p className="text-3xl mb-1">{errorProps.title}</p>
            <p className="text-lg">{errorProps.error}</p>
            <div className="flex gap-6 mt-6 items-center">
                <button className="flex gap-2 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer bg-Surface2 dark:bg-dark-Surface2 hover:bg-Surface dark:hover:bg-dark-Surface" onClick={()=> navigate(-1)}>
                    <BackButton/>
                    Go back
                </button>
                <button onClick={errorProps.action} className="flex gap-2 bg-dark-Background dark:bg-Background text-dark-Primary-text dark:text-Primary-text font-semibold py-3 px-4 rounded-lg cursor-pointer hover:bg-Accent active:bg-Accent active:text-dark-Primary-text hover:text-dark-Primary-text hover:scale-102 transition-all duration-300">
                    <RefreshCwIcon size={23}/>
                    Try Again
                </button>
            </div>
        </div>
    </div>
  )
}

export default ErrorState