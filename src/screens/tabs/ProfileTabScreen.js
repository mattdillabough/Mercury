import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../settings/ProfileScreen";
import SettingScreen from "../settings/SettingScreen";
import PermissionScreen from "../settings/PermissionScreen";

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
  // Add new module screens below
  return (
    <Stack.Navigator headerMode="float" initialRouteName="Applications">
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Permissions" component={PermissionScreen} />
    </Stack.Navigator>
  );
}

export default ApplicationsTabScreen;
