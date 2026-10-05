import { Tabs } from "expo-router";
import { Foundation, Ionicons, AntDesign, FontAwesome6} from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { colors } from "@/theme/colors";

export default function TabLayout() {
  const {colorScheme} = useColorScheme()
  const theme = colorScheme==="dark"? colors.dark:colors.light
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          position: "absolute",
          bottom: 12,
          left: 14,
          right: 14,
          height: 68,
          borderRadius: 32,
          borderWidth: 1,
          borderColor: theme.Border,
          backgroundColor: theme.Background,
          elevation: 0,
          justifyContent: "flex-start",
          gap:50,
        },

        tabBarActiveTintColor: theme["Accent"],
        tabBarInactiveTintColor: theme["Secondary-text"],

        tabBarLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={21} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <AntDesign name="open-ai" size={18} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <AntDesign name="folder-open" size={18} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-gear" size={18} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}