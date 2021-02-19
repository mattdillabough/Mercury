import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

import { Screen, AppButton, AppTextInput } from '../../components';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});


function LoginScreen({ navigation }) {
    return (
        <Screen style={{backgroundColor: 'green'}}>
            <Text style={styles.text}>Login Screen</Text>
            <View style={styles.container}>           

                <View style={styles.input_container}>
                    <AppTextInput placeholder="Email Address" icon="email" />
                    <AppTextInput placeholder="Password" icon="lock" />
                </View>
                
                <View style={styles.button_container}>
                    <AppButton title="Login" />
                </View>

                <TouchableOpacity style={{alignSelf: 'center', marginBottom: 25}} onPress={() => navigation.navigate("Register")} >
                    <Text style={{color: '#9b6be8'}}>Don't have an account?</Text>
                </TouchableOpacity>

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
        marginBottom: 50,
        marginTop: 35,
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

export default LoginScreen;