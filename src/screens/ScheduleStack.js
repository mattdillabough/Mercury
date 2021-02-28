import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScheduleScreen from './ScheduleScreen';

const Stack = createStackNavigator();

function ScheduleStack(props) {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Schedule">
            <Stack.Screen   name="Schedule" component={ScheduleScreen} />
        </Stack.Navigator>
    );
}

export default ScheduleStack;