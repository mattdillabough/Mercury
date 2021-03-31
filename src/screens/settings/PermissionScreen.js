import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';

import { Screen } from '../../components';
import { auth } from '../../firebase/firebase';


function PermissionScreen({ navigation }) {

    const [isAuthor, setIsAuthor] = useState(false);

    useEffect(() => {
        checkForAuthor();
    })

    const checkForAuthor = () => {
        auth.currentUser.getIdTokenResult()
        .then((idTokenResult) => {
            if(!!idTokenResult.claims.admin){
                // permit access to permissions
                setIsAuthor(true);
            } else {
                // deny access to permissions
                showAlert();
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }


    const showAlert = () => {
        Alert.alert(
            "Permission denied",
            "Access not granted due to current role",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Setting")
                }
            ]
        )
    }

    return (
        <Screen>
            <Text>Permissions</Text>
        </Screen>
    );
}

export default PermissionScreen;