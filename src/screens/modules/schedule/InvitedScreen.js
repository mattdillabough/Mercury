import React from 'react';
import { View, Text, Button } from 'react-native';

import { Screen } from '../../../components';
function InvitedScreen(props) {
    console.log(props);
    return (
        <Screen>
            <Text>Invited</Text>
            <Button title="Go Back" onPress={() => props.navigation.navigate("Applications")} />
        </Screen>
    );
}

export default InvitedScreen;