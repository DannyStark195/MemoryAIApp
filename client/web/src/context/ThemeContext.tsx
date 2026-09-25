import {createContext, useContext, useState, type ReactNode} from "react"

export const ThemeContext = createContext({
    theme: 'light',
    changeTheme: (theme:string) =>theme,
});

export  function ThemeProvider({children}:{children:ReactNode}){
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('memory-theme')
    })

    function changeTheme(theme:string){
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