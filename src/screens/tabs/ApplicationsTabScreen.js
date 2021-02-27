import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ApplicationScreen from '../ApplicationScreen';

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
    // Add new module screens below
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Applications">
            <Stack.Screen name="Applications"   component={ApplicationScreen} />
        </Stack.Navigator>
    );
}


export default ApplicationsTabScreen;