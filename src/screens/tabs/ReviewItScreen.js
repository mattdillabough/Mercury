import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen } from "../../components";

const Stack = createStackNavigator();


let ReviewIt = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Review It Screen</Text>
      </View>
    </Screen>
  );
};

function ReviewItScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review It"
        component={ReviewIt}
        options={{ headerTitle: "Review It" }}
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

export default ReviewItScreen;
