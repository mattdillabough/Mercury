import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Screen, AppButton, AppTextInput } from '../../components';


function RegisterScreen(props) {
    return (
        <Screen style={{backgroundColor: 'green'}}>
            <Text style={styles.text}>App Title</Text>
            <View style={styles.container}>           

                <View style={styles.input_container}>
                    <AppTextInput placeholder="Email Address" icon="email" />
                    <AppTextInput placeholder="Password" icon="lock" />
                    <AppTextInput placeholder="Confirm Password" icon="lock" />
                </View>
     
                <View style={styles.button_container}>
                    <AppButton title="Register" />
                </View>

            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button_container: {
        paddingHorizontal: '5%',
        marginBottom: 70,
        marginTop: 50,
    },
    input_container: {
        paddingHorizontal: '5%',        
    },
    text: {
        alignSelf: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70,
        fontSize: 30,
    }
})

export default RegisterScreen;