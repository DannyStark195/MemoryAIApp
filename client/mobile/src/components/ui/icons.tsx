import { cssInterop } from "nativewind";
import { FontAwesome6 } from "@expo/vector-icons";

export const StyledFontAwesome6 = cssInterop(
  FontAwesome6,
  {
    className: {
      target: "style",
    },
  }
);