import { Tabs } from "expo-router";
import { Foundation, Ionicons} from "@expo/vector-icons";

export default function TabLayout() {
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
          height: 60,
          borderRadius: 40,
          borderWidth: 1,
          borderColor: "#333",
          backgroundColor: "#0d0e0f",
          elevation: 0,
          justifyContent: "flex-start",
          gap:50,
        },

        tabBarActiveTintColor: "#8B2BE2",
        tabBarInactiveTintColor: "#888",

        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
        //   tabBarIcon: ({ color }) => (
        //     <Ionicons name="chatbubble-outline" size={24} color={color} />
        //   ),
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
        //   tabBarIcon: ({ color }) => (
        //     <Ionicons name="folder-outline" size={24} color={color} />
        //   ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
        //   tabBarIcon: ({ color }) => (
        //     <Ionicons name="person-outline" size={24} color={color} />
        //   ),
        }}
      />
    </Tabs>
  );
}