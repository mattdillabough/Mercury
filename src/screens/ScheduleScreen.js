import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Screen } from '../components';
import { auth } from '../firebase/firebase';

// Flatlist of upcoming events
// When event clicked, navigate to EventDetailScreen

function ScheduleScreen(props) {

    const [message, setMessage] = useState('');

    useEffect(() => {
        auth.currentUser.getIdTokenResult()
            .then((idTokenResult) => {
                if(!!idTokenResult.claims.admin) {
                    setMessage("You're an admin");
                }
                else {
                    setMessage("You're a user");
                }
            }).catch((error) => {
                console.log(error);
            })
    })
    return (
        <Screen>
            <Text>{message}</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ScheduleScreen;