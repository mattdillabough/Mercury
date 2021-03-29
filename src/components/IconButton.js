import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";

function IconButton({ name, size = 24, onPress, style }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Ionicons name={name} size={size} color={colors.defaultButton} />
    </TouchableOpacity>
  );
}

export default IconButton;
