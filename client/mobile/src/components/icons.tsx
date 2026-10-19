import {
  AntDesign as ExpoAntDesign,
  Entypo as ExpoEntypo,
  EvilIcons as ExpoEvilIcons,
  Feather as ExpoFeather,
  FontAwesome as ExpoFontAwesome,
  FontAwesome5 as ExpoFontAwesome5,
  FontAwesome6 as ExpoFontAwesome6,
  Foundation as ExpoFoundation,
  Ionicons as ExpoIonicons,
  MaterialIcons as ExpoMaterialIcons,
  Octicons as ExpoOcticons,
  SimpleLineIcons as ExpoSimpleLineIcons,
} from "@expo/vector-icons";
import { cssInterop } from "nativewind";

const iconInterop = {
  className: {
    target: "style",
  },
} as const;

export const StyledAntDesign = cssInterop(ExpoAntDesign, iconInterop);
export const StyledEntypo = cssInterop(ExpoEntypo, iconInterop);
export const StyledEvilIcons = cssInterop(ExpoEvilIcons, iconInterop);
export const StyledFeather = cssInterop(ExpoFeather, iconInterop);
export const StyledFontAwesome = cssInterop(ExpoFontAwesome, iconInterop);
export const StyledFontAwesome5 = cssInterop(ExpoFontAwesome5, iconInterop);
export const StyledFontAwesome6 = cssInterop(ExpoFontAwesome6, iconInterop);
export const StyledFoundation = cssInterop(ExpoFoundation, iconInterop);
export const StyledIonicons = cssInterop(ExpoIonicons, iconInterop);
export const StyledMaterialIcons = cssInterop(ExpoMaterialIcons, iconInterop);
export const StyledOcticons = cssInterop(ExpoOcticons, iconInterop);
export const StyledSimpleLineIcons = cssInterop(
  ExpoSimpleLineIcons,
  iconInterop,
);

// Keep the familiar family names so call sites only need to change their import.
export {
  StyledAntDesign as AntDesign,
  StyledEntypo as Entypo,
  StyledEvilIcons as EvilIcons,
  StyledFeather as Feather,
  StyledFontAwesome as FontAwesome,
  StyledFontAwesome5 as FontAwesome5,
  StyledFontAwesome6 as FontAwesome6,
  StyledFoundation as Foundation,
  StyledIonicons as Ionicons,
  StyledMaterialIcons as MaterialIcons,
  StyledOcticons as Octicons,
  StyledSimpleLineIcons as SimpleLineIcons,
};
