import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TestScreen from '../screens/TestScreen';

const Stack = createStackNavigator();

function AppStack(props) {
    return (
        <Stack.Navigator initialRouteName="Test" headerMode="none">
            <Stack.Screen name="Test"    component={TestScreen} />
        </Stack.Navigator>
    );
}

export default AppStack;