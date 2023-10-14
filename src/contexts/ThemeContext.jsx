import { createContext,useState } from "react"

export const Theme = createContext()

export function ThemeContext({children}){
    const [themeIsDark,setTheme] = useState(()=>{
        return localStorage.getItem('theme') !=='light'
      })
    
    
      function changeTheme(){
        localStorage.setItem('theme',themeIsDark ?'light':'dark')
        setTheme(theme=>!theme)
      }
    

    return (
        <Theme.Provider value={{theme:themeIsDark,changeTheme:changeTheme}}>
            {children}

        </Theme.Provider>
    )
}