import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";

import ApplicationsTabScreen from "../screens/tabs/ApplicationsTabScreen";
import ReviewItScreen from "../screens/tabs/ReviewItScreen";
import ProfileTabScreen from "../screens/tabs/ProfileTabScreen";
import ReportItScreen from "../screens/tabs/ReportItScreen";
import RequestItScreen from "../screens/tabs/RequestItScreen";

const Tab = createBottomTabNavigator();

function AppStack(props) {
  return (
    <Tab.Navigator
      headerMode="none"
      tabBarOptions={{
        style: {
          backgroundColor: "#FFC947",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Applications":
              return <AntDesign name="home" size={size} color={color} />;
            case "Review It":
              return <AntDesign name="barschart" size={size} color={color} />;
            case "Profile":
              return <AntDesign name="setting" size={size} color={color} />;
            case "Report It":
              return <AntDesign name="cloudupload" size={size} color={color} />;
            case "Request It":
              return (
                <AntDesign name="clouddownload" size={size} color={color} />
              );

            default:
              break;
          }
        },
      })}
    >
      <Tab.Screen name="Applications" component={ApplicationsTabScreen} />
      <Tab.Screen name="Review It" component={ReviewItScreen} />
      <Tab.Screen name="Report It" component={ReportItScreen} />
      <Tab.Screen name="Request It" component={RequestItScreen} />
      <Tab.Screen name="Profile" component={ProfileTabScreen} />
    </Tab.Navigator>
  );
}

export default AppStack;
