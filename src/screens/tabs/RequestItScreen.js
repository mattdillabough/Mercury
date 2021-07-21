import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { Screen } from "../../components";

const Stack = createStackNavigator();

let RequestIt = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Request It Screen</Text>
      </View>
    </Screen>
  );
};

function RequestItScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Request It"
        component={RequestIt}
        options={{ headerTitle: "Request It" }}
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

export default RequestItScreen;
