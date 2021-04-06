import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ApplicationScreen from '../ApplicationScreen';
import ScheduleStack from '../modules/schedule/ScheduleStack';

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
    // Add new module screens below
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Applications">
            <Stack.Screen name="Applications"   component={ApplicationScreen} />
            <Stack.Screen name="Schedule"       component={ScheduleStack}  />
        </Stack.Navigator>
    );
}


export default ApplicationsTabScreen;