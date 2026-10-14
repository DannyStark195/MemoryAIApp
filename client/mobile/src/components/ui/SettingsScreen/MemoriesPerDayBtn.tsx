import { useState } from "react"
import { Pressable, View } from "react-native";

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
    <View className="flex items-center text-xl gap-2">
        <Pressable aria-label="decrease memories per day" onPress={() => decreaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">-</Pressable>
            <View>{memoriesPerDay}</View>
        <Pressable aria-label="increase memories per day" onPress={() => increaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">+</Pressable>
    </View>
  )
}

export default MemoriesPerDayBtn