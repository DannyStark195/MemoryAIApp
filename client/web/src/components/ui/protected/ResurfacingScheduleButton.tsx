import { CaretRightIcon, RadioButtonIcon} from "@phosphor-icons/react"
import { useState } from "react";

function ResurfacingScheduleButton() {
    const [resurfacingModalOPen, setresurfacingModalOPen] = useState(false);
        function toggleResurfacingModal(){
            setresurfacingModalOPen(prev => !prev)
        }
  return (
    <div className="flex items-center bg-Accent-hover dark:bg-dark-Accent-hover py-2 px-4 rounded-lg relative" onClick={toggleResurfacingModal}>
        Automatic (AI mode)
        <CaretRightIcon />
        <div className={`absolute bottom-12 flex flex-col gap-2 right-0 w-80 py-3 px-3 rounded-md bg-Background dark:bg-dark-Surface shadow-Border shadow-lg dark:shadow-none ${resurfacingModalOPen? '': 'hidden'}`}>
            <div className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Automatic</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">Based on your activities & patterns</p>
                </div>
            </div>
           <div className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Morning</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">6AM-12PM</p>
                </div>
            </div>
           <div className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Afternoon</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">12PM-5PM</p>
                </div>
            </div>
            <div className="flex items-center gap-4 hover:bg-Accent-hover dark:hover:bg-dark-Accent-hover p-1 rounded-md">
                <div className="text-Accent">
                    <RadioButtonIcon size={32} />
                </div>
                <div>
                    <p className="font-semibold mb-0.5">Evening</p>
                    <p className="text-sm text-Secondary-text dark:text-dark-Secondary-text">5PM-11AM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResurfacingScheduleButton