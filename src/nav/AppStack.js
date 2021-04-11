import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

import ApplicationsTabScreen from '../screens/tabs/ApplicationsTabScreen';
import ChatTabScreen from '../screens/tabs/ChatTabScreen';
import ProfileTabScreen from '../screens/tabs/ProfileTabScreen';

const Tab = createBottomTabNavigator();

function AppStack(props) {
    return (
        <Tab.Navigator headerMode="none" screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if ( route.name === 'Applications' ) {
                    return <Entypo name="home" size={size} color={color} />
                } 
                else if ( route.name === 'Chat') {
                    return <Entypo name="chat" size={size} color={color} />
                } 
                else if ( route.name === 'Profile' ) {
                    return <Entypo name="user" size={size} color={color} />
                }
            }
        })} >
            <Tab.Screen name="Applications" component={ApplicationsTabScreen} />
            <Tab.Screen name="Chat"         component={ChatTabScreen} />
            <Tab.Screen name="Profile"      component={ProfileTabScreen} />
        </Tab.Navigator>
    );
}

export default AppStack;