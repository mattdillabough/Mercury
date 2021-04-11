import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ApplicationScreen from '../ApplicationScreen';
import ScheduleStack from '../modules/schedule/ScheduleStack';
import MedicalScreen from '../modules/medical/MedicalScreen';
import InvitedScreen from '../modules/schedule/InvitedScreen';

const Stack = createStackNavigator();

function ApplicationsTabScreen(props) {
    // Add new module screens below
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Applications">
            <Stack.Screen name="Applications"   component={ApplicationScreen} />
            <Stack.Screen name="Schedule"       component={ScheduleStack}     />
            <Stack.Screen name="Medical"        component={MedicalScreen}     />

            {/* Invite is not a module, however, this is a temporary solution to the event invite solution until notifications is built */}
            <Stack.Screen   name="Invite"       component={InvitedScreen}    />
        </Stack.Navigator>
    );
}


export default ApplicationsTabScreen;