import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../settings/ProfileScreen";
import SettingScreen from "../settings/SettingScreen";
import PermissionScreen from "../settings/PermissionScreen";
import PasswordScreen from "../settings/PasswordScreen";
import LocationScreen from "../settings/LocationScreen";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;
  return (
    <Stack.Navigator headerMode="float" initialRouteName="Applications">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerTitle: "Settings",
          headerTitleStyle: {
            fontSize: 24,
            color: theme.textColor
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            backgroundColor: theme.backgroundColor
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Permissions" component={PermissionScreen} />
      <Stack.Screen name="Change Password" component={PasswordScreen} />
      <Stack.Screen name="Change Location" component={LocationScreen} />
    </Stack.Navigator>
  );
}

export default ApplicationsTabScreen;
