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
        let resolvedTheme: "light" | "dark";
        if (theme === "system") {
            resolvedTheme = systemTheme === "dark" ? "dark" : "light";
        } else {
            resolvedTheme = theme;
        }
        setColorScheme(resolvedTheme);
    }, [theme, systemTheme, setColorScheme]);
    
    function changeTheme(theme:ThemePreference){
        setTheme(theme)
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