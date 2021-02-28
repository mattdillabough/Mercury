import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScheduleScreen from './ScheduleScreen';
import EventDetailScreen from './EventDetailScreen';

const Stack = createStackNavigator();

function ScheduleStack(props) {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Schedule">
            <Stack.Screen   name="Schedule" component={ScheduleScreen} />
            <Stack.Screen   name="Event"    component={EventDetailScreen} />
        </Stack.Navigator>
    );
}

export default ScheduleStack;