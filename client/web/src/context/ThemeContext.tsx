import {createContext, useContext, useState, useEffect, type ReactNode} from "react"

export const ThemeContext = createContext({
    theme: "",
    changeTheme: (theme:string) =>theme,
});

export  function ThemeProvider({children}:{children:ReactNode}){
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('memorii-theme') || 'light'
    })
     useEffect(() => {
        document.documentElement.classList.toggle('dark',  
        theme === "dark" ||
            ((theme==="system") && window.matchMedia("(prefers-color-scheme: dark)").matches),);
        
        localStorage.setItem("memorii-theme" , theme);
    }, [theme]);
    
    function changeTheme(theme:string){
        setTheme(theme)
        console.log(theme)
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