import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { PreferencesCard, NotifcationsCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";

import { LogBox } from "react-native";

const data = [
  { id: 1, value: "Permissions" },
  { id: 2, value: "Change Password" },
  { id: 3, value: "Change Location" },
];

function SettingScreen({ navigation }) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;
  const dispatch = useDispatch();

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
