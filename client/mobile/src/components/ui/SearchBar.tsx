import { Feather } from "@/components/icons";
import { colors } from "@/theme/colors";
import { type Memory } from "@/types/model";
import { getFolders } from "@/api/getFolders";
import File from "@/components/ui/LibraryScreen/File";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import {
  FlatList,
  Dimensions,
  Text,
  TextInput,
  View,
} from "react-native";

type SearchMemory = {
  memory: Memory;
  folderName: string;
};

type SearchProps = {
  placeHolder: string;
  func?: () => void;
};

function SearchBar({ placeHolder, func }: SearchProps) {
  const [search, setSearch] = useState("");
  const [memories, setMemories] = useState<SearchMemory[]>([]);
  const [inputHeight, setInputHeight] = useState(0);
  const { colorScheme } = useColorScheme();
  const inputTextColor = colorScheme === "dark"
    ? colors.dark["Tertiary-text"]
    : colors.light["Tertiary-text"];
  const isOpen = search.trim().length > 0;

  useEffect(() => {
    let isCurrent = true;

    getFolders().then((folders) => {
      if (!isCurrent) return;
      setMemories(folders.flatMap((folder) =>
        folder.files.map((file) => ({ memory: file as Memory, folderName: folder.name }))
      ));
    }).catch((error: unknown) => {
      console.error("Unable to load memories for search", error);
    });

    return () => { isCurrent = false; };
  }, []);

  const normalizedSearch = search.trim().toLocaleLowerCase();
  const results = memories.filter(({ memory, folderName }) =>
    `${memory.name} ${memory.category} ${folderName}`.toLocaleLowerCase().includes(normalizedSearch)
  );

  function closeSearch() {
    setSearch("");
  }

  const overlayHeight = Dimensions.get("window").height;

  return (
    <View className="flex gap-2">
      <View className="relative">
        <View className="absolute top-3 left-3 z-10 pointer-events-none">
          <Feather name="search" size={14} className="text-Tertiary-text dark:text-dark-Tertiary-text" />
        </View>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={inputTextColor}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={func}
          onLayout={(event) => setInputHeight(event.nativeEvent.layout.height)}
          returnKeyType="search"
          className="w-full py-2 px-2 pl-10 focus:border-2 rounded-full text-sm base-text border border-Surface2 dark:border-dark-Surface2"
          style={{ color: inputTextColor }}
          accessibilityLabel={placeHolder}
          accessibilityState={{ expanded: isOpen }}
        />
      </View>

      {isOpen && (
          <View
            className="absolute left-[-16px] right-[-16px] z-50 bg-Background px-4 py-4 dark:border-dark-Surface2 dark:bg-dark-Background"
            style={{ top: inputHeight, height: overlayHeight, elevation: 50 }}
          >
            {results.length > 0 ? (
              <FlatList
                data={results}
                keyExtractor={({ memory, folderName }) => `${folderName}-${memory.id}`}
                keyboardShouldPersistTaps="handled"
                renderItem={({ item }) => <File fileProps={item.memory} />}
              />
            ) : (
              <Text className="pt-8 text-center text-sm text-Secondary-text dark:text-dark-Secondary-text">
                No memories found for “{search.trim()}”.
              </Text>
            )}
          </View>
      )}
    </View>
  );
}

export default SearchBar;
