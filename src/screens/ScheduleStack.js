import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View} from 'react-native';

import { IconButton } from '../components';
import { auth } from '../firebase/firebase';
import ScheduleScreen from './ScheduleScreen';
import AddEventScreen from './AddEventScreen';
import EditEventScreen from './EditEventScreen';
import EventDetailScreen from './EventDetailScreen';


/*
ScheduleScreen    = Flatlist of all upcoming events
AddEventScreen    = Create a new event, roles only
EditEventScreen   = Editing an event, available to creator of event only
EventDetailScreen = Information about selected event, viewable by all users
*/

const Stack = createStackNavigator();

function ScheduleStack({ navigation }) {

    const [role, setRole] = useState(false);

    useEffect(() => {
        auth.currentUser.getIdTokenResult(true)
            .then((idTokenResult) => {
                if(!!idTokenResult.claims.admin || idTokenResult.claims.accessLevel > 1) {
                    setRole(true);
                }
            }).catch((error) => {
                console.log(error);
            })
    })

    return (
        <Stack.Navigator headerMode="screen" initialRouteName="Schedule">
            <Stack.Screen   name="Schedule" component={ScheduleScreen} options={{
                title: "Upcoming Events",
                headerRight: (props) => {
                    return(
                        <View>
                            {role && <IconButton style={{marginRight: 15}} name="add" size={27} onPress={() => navigation.navigate('Add Event')} /> }
                        </View>          
                    )
                }
            }} />
            <Stack.Screen   name="Add Event"    component={AddEventScreen} />
            <Stack.Screen   name="Edit Event"   component={EditEventScreen}/>
            <Stack.Screen   name="Event"        component={EventDetailScreen} />
        </Stack.Navigator>
    );
}

export default ScheduleStack;