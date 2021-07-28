import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen } from "../../components";
import CardItem from "../../components/CardItem";
import PopularCardItem from "../../components/PopularCardItem";

const Stack = createStackNavigator();

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];

const ReviewIt = () => {
  const renderItem = ({ item }) => <CardItem itemName={item.title}/>;
  const renderPopItem = ({ item }) => <PopularCardItem itemName={item.title}/>;
  return (
    <View>
        <View>
          
          <Text style={styles.text}>Popular</Text>
          <FlatList
            horizontal={true}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <FlatList
          data={DATA}
          renderItem={renderPopItem}
          keyExtractor={(item) => item.id}
        />
    </View>
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
  text: {
    fontSize: 30
  },
  list: {
    flex: 1
  }
});

export default ReviewItScreen;
