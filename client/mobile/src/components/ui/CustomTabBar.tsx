
import { Pressable, Text, View } from "react-native";
import { router, usePathname } from "expo-router";
import {
  AntDesign,
  EvilIcons,
  FontAwesome6,
  Foundation,
} from "@/components/icons";
import { useColorScheme } from "nativewind";
import { colors } from "@/theme/colors";

const tabs = [
  { name: "Home", path: "/", icon: "home" },
  { name: "Explore", path: "/explore", icon: "search" },
  { name: "Chat", path: "/chat", icon: "chat" },
  { name: "Library", path: "/library", icon: "library" },
  { name: "Settings", path: "/settings", icon: "settings" },
] as const;

export default function CustomTabBar() {
  const pathname = usePathname();
  const { colorScheme } = useColorScheme();

  const theme =
    colorScheme === "dark" ? colors.dark : colors.light;

  // Detail screens inherit the active state of their parent tab.
  const activeTab = pathname.startsWith("/folder-detail")
    ? "/library"
    : pathname.startsWith("/setting")
      ? "/settings"
      : pathname;

  function renderIcon(icon: (typeof tabs)[number]["icon"], color: string) {
    switch (icon) {
      case "home":
        return <Foundation name="home" size={21} color={color} />;

      case "search":
        return <EvilIcons name="search" size={25} color={color} />;

      case "chat":
        return <AntDesign name="open-ai" size={20} color={color} />;

      case "library":
        return <AntDesign name="folder-open" size={18} color={color} />;

      case "settings":
        return <FontAwesome6 name="user-gear" size={18} color={color} />;
    }
  }

  return (
    <View
      className="absolute bottom-2 left-0 right-0 h-[76px] flex-row items-center justify-between rounded-[32px] border px-2"
      style={{
        backgroundColor: theme.Background,
        borderColor: theme.Border,
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: "transparent",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.path;
        const iconColor = isActive
          ? theme.Accent
          : theme["Secondary-text"];

        return (
          <Pressable
            key={tab.path}
            onPress={() => router.navigate(tab.path)}
            className="flex-1 h-full items-center justify-center gap-1"
          >
            {renderIcon(tab.icon, iconColor)}

            <Text
              className="text-[16px] font-[500]"
              style={{ color: iconColor }}
            >
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
