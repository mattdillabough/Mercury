import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen } from "../../components";

const Stack = createStackNavigator();

let ReportIt = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Report It Screen</Text>
      </View>
    </Screen>
  );
};

function ReportItScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Report It"
        component={ReportIt}
        options={{ headerTitle: "Report It" }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default ReportItScreen;
