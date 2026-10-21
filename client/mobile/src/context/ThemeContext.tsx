import {createContext, useContext, useState, useEffect, type ReactNode} from "react"
import { useColorScheme } from "nativewind";
import {useColorScheme as systemsTheme} from "react-native"
export const ThemeContext = createContext({
    theme: "",
    changeTheme: (theme:ThemePreference) =>theme,
});
type ThemePreference = "light" | "dark" | "system";

export  function ThemeProvider({children}:{children:ReactNode}){
    const {setColorScheme} = useColorScheme();
    const [theme, setTheme] = useState<ThemePreference>(()=>{
        // return localStorage.getItem('memorii-theme') || 'light'
        return 'system'
    })
    const systemTheme = systemsTheme();
     useEffect(() => {
        if(theme==="system"){
            console.log(systemsTheme)
            if(systemTheme==='dark'){
                setColorScheme('dark')
            }
            else{
                setColorScheme('light')
            }
        }
        else{
            setColorScheme(theme)
        }
        // localStorage.setItem("memorii-theme" , theme);
    }, [theme, setColorScheme]);
    
    function changeTheme(theme:ThemePreference){
        setTheme(theme)
        // console.log(theme, systemsTheme)
        return theme
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext)
}