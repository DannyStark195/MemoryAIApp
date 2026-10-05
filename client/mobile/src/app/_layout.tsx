import { Stack } from "expo-router";
import "../global.css";
import { useColorScheme } from "nativewind";
export default function RootLayout() {
  const {setColorScheme} = useColorScheme();
  setColorScheme('dark')
  return <Stack 
            screenOptions={
              {
                headerShown: false,
                contentStyle: {
                backgroundColor: "#your-background",
              },
              }
              
            }
          />;
}