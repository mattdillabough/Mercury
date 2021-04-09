import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import { Screen } from '../../../components';
import { auth } from '../../../firebase/firebase';

function MedicalScreen({ navigation }) {

    useEffect(() => {
        checkForPermission();
    })

    const checkForPermission = () => {
        auth.currentUser.getIdTokenResult(true)
            .then((idTokenResult) => {
                if(!idTokenResult.claims.nurse) {
                    denyPermissionAlert();
                }
            })
    }

    const denyPermissionAlert = () => {
        Alert.alert(
            "Access denied",
            "Only medical staff may access this module",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Applications")
                }
            ]
        )
    }

    return (
        <Screen>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Nurses Only</Text>
        </Screen>
    );
}

export default MedicalScreen;