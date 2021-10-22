import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import LogoSvg from "../../assets/logo.svg";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logOutButton}>
        {user && (
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logOutText}>Sair</Text>
          </TouchableOpacity>
        )}
        <Avatar imageUri={user?.avatar_url} />
      </View>
    </View>
  );
}
