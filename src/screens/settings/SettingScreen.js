import React, { useEffect } from "react";
import { ScrollView, StyleSheet, StatusBar, StatusBarIOS } from "react-native";
import { PreferencesCard, NotifcationsCard } from "../../components";
import { useSelector } from "react-redux";

import { LogBox } from "react-native";



function SettingScreen({ navigation }) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      flex: 1,
    },
  });
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <PreferencesCard navigation={navigation} />
      <NotifcationsCard />
    </ScrollView>
  );
}

export default SettingScreen;
