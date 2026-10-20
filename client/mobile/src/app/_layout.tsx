import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Toast from "react-native-toast-message";
import toastConfig from "@/components/ui/ToastConfig";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView>
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
  );
}
