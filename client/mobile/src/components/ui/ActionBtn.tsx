import { act } from 'react'
import { Pressable, Text } from 'react-native'

type ActionBtnProps ={
    text: string,
    style?: string,
    actionFunc?: ()=> void
}
function ActionBtn({text, style, actionFunc}:ActionBtnProps) {
  return (
    <Pressable
        onPress={actionFunc}
        className={`bg-dark-Background dark:bg-Background px-4 py-2.5 !rounded-xl active:bg-Accent active:text-dark-Primary-text ${style}`}
        >
            {({pressed})=>(
                <Text className={`text-dark-Primary-text dark:text-Primary-text text-center ${pressed? 'text-dark-Primary-text dark:text-dark-Primary-text': ''} font-semibold`}>{text}</Text>
            )}
    </Pressable>
  )
}

export default ActionBtn