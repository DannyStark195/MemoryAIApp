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
        <div onClick={() => decreaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">-</div>
            <div>{memoriesPerDay}</div>
        <div  onClick={() => increaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">+</div>
    </div>
  )
}

export default MemoriesPerDayBtn