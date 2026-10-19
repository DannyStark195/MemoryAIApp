import { View } from "react-native";

function LoadingState() {
 const dots = [0, 120, 240];
  const size = 60, dotSize = 16, radius = 18;

  return (

        <View className="flex-1 items-center justify-center fixed top-0 w-full h-screen bg-Background dark:bg-dark-Background">
            <View className="relative animate-spin" style={{ width: size, height: size }}>
                {dots.map((deg) => {
                const rad = (deg - 90) * (Math.PI / 180);
                const x = size / 2 + radius * Math.cos(rad) - dotSize / 2;
                const y = size / 2 + radius * Math.sin(rad) - dotSize / 2;
                return (
                    <View
                    key={deg}
                    className="absolute rounded-full bg-Accent"
                    style={{ width: dotSize, height: dotSize, left: x, top: y }}
                    />
                );
                })}
            </View>
    </View>
  )
}

export default LoadingState