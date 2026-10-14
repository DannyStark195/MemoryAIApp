import { useState } from "react"

function MemoriesPerDayBtn() {
  const [memoriesPerDay, setMemoiresPerDay] = useState(3);

  function increaseMemoriesPerDay(){
    if(memoriesPerDay>4) return
    setMemoiresPerDay(prev => prev+1)
  }
  function decreaseMemoriesPerDay(){
    if(memoriesPerDay<2) return
    setMemoiresPerDay(prev => prev-1)
  }
  return (
    <div className="flex items-center text-xl gap-2">
        <button aria-label="decrease memories per day" onClick={() => decreaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">-</button>
            <div>{memoriesPerDay}</div>
        <button aria-label="increase memories per day" onClick={() => increaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">+</button>
    </div>
  )
}

export default MemoriesPerDayBtn