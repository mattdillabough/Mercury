import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ApplicationScreen from "../ApplicationScreen";
import ScheduleStack from "../modules/schedule/ScheduleStack";
import MedicalScreen from "../modules/medical/MedicalScreen";
import CovidScreen from "../modules/covid/CovidScreen";
import { useSelector } from "react-redux";
import InvitedScreen from "../modules/schedule/InvitedScreen";

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {

  const state = useSelector((state) => state.modeReducer);
  const theme = state.mode.theme;
  return (
    <Stack.Navigator initialRouteName="Applications">
      <Stack.Screen
        name="Applications"
        component={ApplicationScreen}
        options={{
          headerTitle: "Home",
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
      <Stack.Screen name="Schedule" component={ScheduleStack} />
      <Stack.Screen name="Medical" component={MedicalScreen} />
      <Stack.Screen name="COVID-19" component={CovidScreen} />

      {/* Invite is not a module, however, this is a temporary solution to the event invite solution until notifications is built */}
      <Stack.Screen name="Invite" component={InvitedScreen} />
    </Stack.Navigator>
  );
}

export default ApplicationsTabScreen;
