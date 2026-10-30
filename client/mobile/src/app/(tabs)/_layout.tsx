import { Tabs } from "expo-router";
import {
  AntDesign,
  EvilIcons,
  FontAwesome6,
  Foundation,
} from "@/components/icons";
import { useColorScheme } from "nativewind";
import { colors } from "@/theme/colors";

export default function TabLayout() {
  const {colorScheme} = useColorScheme()
  const theme = colorScheme==="dark"? colors.dark:colors.light
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: "below-icon",
        tabBarStyle: {
          position: "absolute",
          bottom: 8,
          left: 10,
          right: 10,
          height: 76,
          borderRadius: 32,
          borderWidth: 1,
          borderColor: theme.Border,
          backgroundColor: theme.Background,
          paddingTop: 6,
          paddingBottom: 6,
          paddingInline: 4,
          elevation: 0, // Android
          shadowOpacity: 0, // iOS
          shadowColor: "transparent",
        },

        tabBarActiveTintColor: theme["Accent"],
        tabBarInactiveTintColor: theme["Secondary-text"],

        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 400,
        },
          tabBarItemStyle: {
            // borderRadius: 20,
            // paddingBlock: 3,
            // display:"flex"
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
            // <Ionicons name="search" size={20} color={color} />
            <EvilIcons name="search" size={26} color={color} />
            // <Feather name="search" size={21} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <AntDesign name="open-ai" size={20} color={color} />
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
      <Tabs.Screen
        name="folder-detail/[name]"
        options={{
           tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="setting/[name]"
        options={{
           tabBarButton: () => null,
        }}
      />
    </Tabs>
  );
}
