import React from "react";
import { Text, StyleSheet, View } from "react-native";

import { Screen } from "../../components";

function ReviewItScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Review It Screen</Text>
      </View>
    </Screen>
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
