import Layout from "../Layout.tsx"
import BackButton from "../../BackButton.tsx"
import { RadioButtonIcon } from "@phosphor-icons/react"
import { useTheme } from "../../../../context/ThemeContext.tsx"
import MemoriesPerDayBtn from "../MemoriesPerDayBtn.tsx";
import { useState } from "react";
import ResurfacingScheduleButton from "../ResurfacingScheduleButton.tsx";
function Preferences() {
  const {theme, changeTheme} = useTheme();
  // const root = document.documentElement
  const [resurfacingOn, setResurfacingOn] = useState(false)

  return (
    <Layout>
         <div className="flex justify-between mb-8">
                <h1 className="text-xl md:text-xl font-medium leading-wider mb-2">Preferences</h1>
                <BackButton />
          </div>
          <main className="mt-8 overflow-y-auto max-h-[78dvh] no-scrollbar">
            <div>
              <h2 className="font-medium">Appearance</h2>
              <div className="my-4 flex gap-4">
                <button aria-label="light mode"  onClick={()=> changeTheme("light")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  Light
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="light"?"fill":"thin"} />
                    </div>
                </button>
                <button aria-label="dark mode" onClick={()=> changeTheme("dark")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  Dark
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="dark"?"fill":"thin"}  />
                    </div>
                </button>
                <button aria-label="system default" onClick={()=> changeTheme("system")} className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  System
                  <div className="text-Accent">
                      <RadioButtonIcon size={32} weight={theme==="system"?"fill":"thin"}  />
                    </div>
                </button>
              </div>
            </div>
            <div>
              <h2 className="font-medium">Memories per day</h2>
              <div className="my-4">
                <div className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <p>Number of memories to resurface daily</p>
                  <MemoriesPerDayBtn />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-medium">Resurfacing Schedule</h2>
              <div className="my-4">
                <div className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <p>When you'd like to recieve reminders</p>
                  <ResurfacingScheduleButton />
                </div>
              </div>
            </div>
             <div>
              <h2 className="font-medium">Notifications</h2>
              <div className="my-4">
                <div className="flex items-center justify-between w-full py-2 px-2 border border-Surface2 dark:border-dark-Surface2 rounded-lg cursor-pointer">
                  <p>Resurfacing reminders</p>
                  <div className="flex items-center gap-6">
                    <span className="font-medium">{resurfacingOn? 'on' : 'off'}</span>
                    <button className={`relative w-11 h-6.5  rounded-full ${resurfacingOn? 'bg-Accent':'bg-Surface2 dark:bg-dark-Surface2'}`} onClick={()=> setResurfacingOn(prev => !prev)}>
                      <div className={`absolute  top-0.75 ${resurfacingOn?'right-1': 'left-1'} transition-all duration-500 p-2.5 bg-Background rounded-full`}></div>
                    </button>
                  </div> 
                </div>
                
              </div>
            </div>
          </main>
       </Layout>
  )
}

export default Preferences