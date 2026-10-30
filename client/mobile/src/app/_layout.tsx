import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Toast from "react-native-toast-message";
import toastConfig from "@/components/ui/ToastConfig";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { router } from "expo-router";
import {useEffect} from "react"
export default function RootLayout() {
   useEffect(() => {
    // router.replace("/auth");
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-Background dark:bg-dark-Background">
        <ThemeProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: {
                backgroundColor: "#your-background",
              },
            }}
          />
          <Toast config={toastConfig} topOffset={50} />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
