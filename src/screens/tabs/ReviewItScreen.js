import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CardItem from "../../components/CardItem";
import PopularCardItem from "../../components/PopularCardItem";
import SearchBox from "../../components/SearchBox";

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
  const renderItem = ({ item }) => <CardItem itemName={item.title} />;
  const renderPopItem = ({ item }) => <PopularCardItem itemName={item.title} />;
  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <SearchBox />
      </View>
      <View style={styles.popularList}>
        <Text style={styles.text}>Popular</Text>
        <FlatList
          horizontal={true}
          data={DATA}
          renderItem={renderPopItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </View>
  );
};

function ReviewItScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Review It"
        component={ReviewIt}
        options={{
          headerTitle: "Review It",
          headerTitleStyle: {
            fontSize: 20
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    marginLeft: 10
  },
  popularList: {
    flex: 1,
  },
  list: {
    flex: 2,
  },
  searchBox: {
    flexDirection: "row",
  },
  searchBoxContainer: {
    flex: 0.75,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReviewItScreen;
