import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Toast from 'react-native-toast-message'
import toastConfig from "@/components/ui/ToastConfig";


export default function RootLayout() {
  return (
      <ThemeProvider>
          <Stack 
            screenOptions={
              {
                headerShown: false,
                contentStyle: {
                backgroundColor: "#your-background",
                    },
                    }
                  }
                />
          <Toast config={toastConfig} topOffset={50}/>
      </ThemeProvider>
  )      
}