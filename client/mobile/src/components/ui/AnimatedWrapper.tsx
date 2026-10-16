import Animated, { FadeInDown, FadeOutDown} from 'react-native-reanimated'
import { useEffect, useState } from 'react'

type AnimatedWrapperProps = {
  visible: boolean
  children: React.ReactNode
  onHide?: () => void
}

export default function AnimatedWrapper({ visible, children, onHide }: AnimatedWrapperProps) {
  const [shouldRender, setShouldRender] = useState(visible)

  useEffect(() => {
    if (visible) setShouldRender(true)
  }, [visible])

  if (!shouldRender) return null

  return (
    <Animated.View
      entering={FadeInDown.duration(400)}
      exiting={FadeOutDown.duration(400).withCallback((finished) => {
        if (finished) {
          setShouldRender(false)
          onHide?.()
        }
      })}
    >
      {children}
    </Animated.View>
  )
}