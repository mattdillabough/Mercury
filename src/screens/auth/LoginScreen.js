import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Yup from 'yup';

import colors from '../../config/colors';

import { 
    Screen, 
    AppFormField, 
    AppForm, 
    SubmitButton,
    KeyboardView,
    ErrorMessage
} from '../../components';
import { storeData, getData } from './helpers';
import { loginWithEmail } from '../../firebase/firebase';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
});

const USER = "@USER";
const KEY = "@KEY";


function LoginScreen({ navigation }) {

    const [loginError, setLoginError] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [scanned, setScanned] = useState(false);

    const toggleSwitch = () => setIsEnabled(isEnabled => !isEnabled);

    useEffect(() => {
        checkDeviceForHardware();
        checkForFingerprints();
        if(!scanned){
            handleFaceId();
        }
      },[])
    
    const checkDeviceForHardware = async() => {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        if(compatible){
            console.log('Compatible device')
        }
        else {
            console.log('does not have the hardware')
        }
      }

    const checkForFingerprints = async () => {
        let fingerprints = await LocalAuthentication.isEnrolledAsync();
        if(!fingerprints){
            console.log("no fingerprints found")
        }
        else{
            console.log("fingerprints found")
        }
    };

    handleFaceId = async() => {
        handleAuth();
    }

    handleAuth = async() => {
        let result = await LocalAuthentication.authenticateAsync();
        if(result.success){

            setScanned(true);

            const username_async = getData(USER);
            const password_async = getData(KEY);
            console.log(username_async);
            console.log(password_async);

            handleOnLogin({ username_async, password_async });

        }
    }


    async function handleOnLogin(values) {
        const { email, password } = values;
    
        try {
            await loginWithEmail(email, password);
            storeData(email);
            storeData(password);

        } catch (error) {
          setLoginError(error.message);
        }
      }


    return (
        <Screen>
        <KeyboardView  style={styles.container}>
            
            <AppForm
                initialValues={{ 
                    email: '', 
                    password: ''
                    }}
                onSubmit={values => handleOnLogin(values)}
                validationSchema={validationSchema}
            >
                <View style={{paddingBottom: 140}}>
                    <Text style={styles.text} >Login Screen</Text>
                </View>

                <View style={styles.input_container}>
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email Address"  
                        textContentType="emailAddress" 
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock" 
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                </View>
                <View style={styles.switch}>
                    <Text>Face ID</Text>
                    <Switch
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>     
                <View style={styles.button_container} >
                    <SubmitButton title="Login" />
                </View>
                <ErrorMessage error={loginError} visible={true} />
            </AppForm>

                <TouchableOpacity 
                    style={{ alignSelf: 'center', marginBottom: 10 }} 
                    onPress={() => navigation.navigate("Register")} >
                    <Text style={{color: colors.blue }}>Don't have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ alignSelf: 'center', marginBottom: 25}}
                    onPress={() => navigation.navigate("Recover")}>
                    <Text  style={{color: colors.blue }}>Forgot Password?</Text>
                </TouchableOpacity>
            </KeyboardView>
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
        marginBottom: 60,
        marginTop: 30,
    },
    input_container: {
        paddingHorizontal: '5%',        
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
    },
    switch: {
        alignSelf: 'center',
    }
})

export default LoginScreen;