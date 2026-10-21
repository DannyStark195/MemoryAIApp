import { useState } from "react"
import { Pressable, Text, View } from "react-native";

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
    <View className="flex-row items-center text-xl gap-2">
        <Pressable aria-label="decrease memories per day" onPress={() => decreaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">
          <Text className="text-Primary-text dark:text-dark-Primary-text">-</Text>
        </Pressable>
            <Text className="text-Primary-text dark:text-dark-Primary-text">{memoriesPerDay}</Text>
        <Pressable aria-label="increase memories per day" onPress={() => increaseMemoriesPerDay()} className="py-2 px-4 bg-Surface2 dark:bg-dark-Surface2 rounded-xl">
          <Text className="text-Primary-text dark:text-dark-Primary-text">+</Text>
        </Pressable>
    </View>
  )
}

export default MemoriesPerDayBtn