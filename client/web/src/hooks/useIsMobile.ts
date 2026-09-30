import {useState, useEffect} from "react"

export function useIsMobile(){
    const [isMobile, setIsMobile] = useState(window.innerWidth<768);

    useEffect(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth<768)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('rezize', handleResize)
    }, [])

    return isMobile
}