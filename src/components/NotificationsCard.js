import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { SettingsRow } from "../components";

function NotifcationsCard() {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;


  const styles = StyleSheet.create({
    container: {
      padding: 20,
      margin: 10,
      borderRadius: 10,
      backgroundColor: theme.cardColor,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    text: {
      color: theme.textColor,
    },
    title: {
      color: theme.textColor,
      fontSize: 25,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notfications</Text>
      <SettingsRow item={"Push Notifications"} icon={"message-circle"} />
      <SettingsRow item={"SMS Notifications"} icon={"message-square"}/>
      <SettingsRow item={"Email Notifications"} icon={"mail"} />
    </View>
  );
}

export default NotifcationsCard;