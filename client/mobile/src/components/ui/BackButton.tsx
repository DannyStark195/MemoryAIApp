import Ionicons from '@expo/vector-icons/build/Ionicons';
import { router } from 'expo-router'
import { Pressable } from 'react-native'

function BackButton() {
  return (
    <Pressable aria-label="back" className="cursor-pointer" onPress={()=> {
      if (router.canGoBack()) {
        router.back();
      } else {
        router.replace("/");
      }
    }}>
      <Ionicons name="arrow-back-sharp" size={20} className='text-Primary-text dark:text-dark-Primary-text' />
    </Pressable>
  )
}

export default BackButton