import React from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity, } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons, Feather } from "@expo/vector-icons";

function SettingsRow({
  item = "Dark Mode",
  isSwitch = true,
  onPress = () => {
    console.log("hello world");
  },
  state = false,
  icon = "moon",
}) {
  const themeState = useSelector((state) => state.modeReducer);
  const theme = themeState.mode.theme;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "space-between",
    },
    text: {
      color: theme.textColor,
      fontSize: 18,
      marginLeft: 10,
    },
    textContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      color: theme.textColor,
    },
  });

  return isSwitch ? (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Feather size={27} name={icon} style={styles.icon} />
        <Text style={styles.text}>{item}</Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: theme.accentColor }}
        ios_backgroundColor="#3e3e3e"
        value={state}
        onValueChange={onPress}
      />
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
      <View style={styles.textContainer}>
        <Feather size={27} name={icon} style={styles.icon} />
        <Text style={styles.text}>{item}</Text>
      </View>
        <Ionicons
          name="chevron-forward"
          size={27}
          style={styles.icon}
        ></Ionicons>
      </View>
    </TouchableOpacity>
  );
}

export default SettingsRow;
