import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../settings/ProfileScreen";
import SettingScreen from "../settings/SettingScreen";
import PermissionScreen from "../settings/PermissionScreen";
import PasswordScreen from "../settings/PasswordScreen"
// import LocationScreen from "../settings/ChangeLocationScreen";


const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
  // Add new module screens below
  return (
    <Stack.Navigator headerMode="float" initialRouteName="Applications">
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown: false}} />
      <Stack.Screen name="Permissions" component={PermissionScreen} />
      <Stack.Screen name="Change Password" component={PasswordScreen} />
      {/* <Stack.Screen name="Change Location" component={LocationScreen} /> */}
    </Stack.Navigator>
  );
}

export default ApplicationsTabScreen;
