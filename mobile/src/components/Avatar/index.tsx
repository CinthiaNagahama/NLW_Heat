import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import avatarDefault from "../../assets/avatar.png";
import { styles } from "./styles";
import { COLORS } from "../../theme";

const _sizes = {
  small: {
    containerSize: 32,
    avatarSize: 28,
  },
  normal: {
    containerSize: 48,
    avatarSize: 42,
  },
};

type Props = {
  imageUri: string | undefined;
  sizes?: "small" | "normal";
};

const _avatarDefault = Image.resolveAssetSource(avatarDefault).uri;

export function Avatar({ imageUri, sizes = "normal" }: Props) {
  const { containerSize, avatarSize } = _sizes[sizes];
  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        },
      ]}
    >
      <Image
        source={{ uri: imageUri || _avatarDefault }}
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          },
        ]}
      />
    </LinearGradient>
  );
}
