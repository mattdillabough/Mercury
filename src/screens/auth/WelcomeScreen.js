import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Screen, AppButton } from '../../components';

function WelcomeScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>Welcome Screen</Text>
                </View>
                <View style={styles.button_container}>
                    <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                    <AppButton title="Register" onPress={() => navigation.navigate("Register")} />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    button_container: {
        paddingHorizontal: '5%',
        padding: 20,
        paddingBottom: 60,
    },
    title: {
        position: 'absolute',
        top: 60,
        alignSelf: 'center',
    },
    text: {
        fontSize: 30,
    }
})

export default WelcomeScreen;