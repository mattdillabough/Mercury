import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ApplicationsTabScreen from '../screens/tabs/ApplicationsTabScreen';
import ChatTabScreen from '../screens/tabs/ChatTabScreen';
import ProfileTabScreen from '../screens/tabs/ProfileTabScreen';

const Tab = createBottomTabNavigator();

function AppStack(props) {
    return (
        <Tab.Navigator initialRouteName="Applications" headerMode="none">
            <Tab.Screen name="Applications" component={ApplicationsTabScreen} />
            <Tab.Screen name="Chat"         component={ChatTabScreen} />
            <Tab.Screen name="Profile"      component={ProfileTabScreen} />
        </Tab.Navigator>
    );
}

export default AppStack;