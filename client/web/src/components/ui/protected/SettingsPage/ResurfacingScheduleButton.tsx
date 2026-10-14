import { CaretRightIcon, RadioButtonIcon} from "@phosphor-icons/react"
import { useState } from "react";

function ResurfacingScheduleButton() {
    const [resurfacingModalOPen, setresurfacingModalOPen] = useState(false);
        function toggleResurfacingModal(){
            setresurfacingModalOPen(prev => !prev)
        }
  return (
    <button className="flex items-center bg-Accent text-dark-Primary-text cursor-pointer py-3 px-4 rounded-lg relative" onClick={toggleResurfacingModal}>
        Automatic (AI mode)
        <CaretRightIcon />
        <div className={`absolute bottom-22 md:bottom-14 flex flex-col gap-2 right-0 w-80 py-3 px-3 rounded-md text-Primary-text dark:text-dark-Primary-text bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none ${resurfacingModalOPen? '': 'hidden'}`}>
            <button className="flex gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md cursor-pointer" onClick={()=> console.log("yo")}>
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5 text-start">Automatic</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">Based on your activities & patterns</p>
                </div>
            </button>
           <button className="flex items-center gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md cursor-pointer">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Morning</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6AM-12PM</p>
                </div>
            </button>
           <button className="flex items-center gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md cursor-pointer">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Afternoon</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">12PM-6PM</p>
                </div>
            </button>
            <button className="flex items-center gap-2 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md cursor-pointer">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Evening</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6PM-12AM</p>
                </div>
            </button>
        </div>
    </button>
  )
}

export default ResurfacingScheduleButton