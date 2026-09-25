import Layout from "../Layout.tsx"
import BackButton from "../../BackButton.tsx"
import { RadioButtonIcon } from "@phosphor-icons/react"
import { useTheme } from "../../../../context/ThemeContext.tsx"
function Preferences() {
  const {theme, changeTheme} = useTheme();
  // const root = document.documentElement

  return (
    <Layout>
         <div className="flex justify-between mb-8">
                <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Preferences</h1>
                <BackButton />
          </div>
          <main>
            <div>
              <h2>Appearance</h2>
              <div className="my-4 flex gap-4">
                <div  onClick={()=> changeTheme("light")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  Light
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="light"?"fill":"thin"} />
                    </div>
                </div>
                <div  onClick={()=> changeTheme("dark")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  Dark
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="dark"?"fill":"thin"}  />
                    </div>
                </div>
                <div  onClick={()=> changeTheme("system")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  System
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="system"?"fill":"thin"}  />
                    </div>
                </div>
              </div>
            </div>
          </main>
       </Layout>
  )
}

export default Preferences