import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';

import { 
    Screen, 
    AppFormField, 
    AppForm, 
    SubmitButton,
    ErrorMessage
} from '../../components';
import { registerWithEmail } from '../../firebase/firebase';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Confirm Password must match Password').required('Confirm Password is required')
});


function RegisterScreen({ navigation }) {

    const [registerError, setRegisterError] = useState('');

    async function handleOnSignUp(values) {
        const { email, password } = values;
        try {
          await registerWithEmail(email, password);
        } catch (error) {
          setRegisterError(error.message);
        }
      }

    return (
        <Screen>
            <View style={styles.container}>

            <View style={{paddingBottom: 140}}>
                    <Text style={styles.text} >Register Screen</Text>
                </View>
            
            <AppForm
                initialValues={{ 
                    email: '', 
                    password: '',
                    confirmPassword: ''
                    }}
                onSubmit={values => handleOnSignUp(values)}
                validationSchema={validationSchema}
            >


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
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                </View>
                
                <View style={styles.button_container} >
                    <SubmitButton title="Register" />
                </View>
                <ErrorMessage error={registerError} visible={true} />
            </AppForm>
                <TouchableOpacity 
                    style={{
                        alignSelf: 'center', 
                        marginBottom: 25
                    }} 
                    onPress={() => navigation.navigate("Login")} >
                    <Text style={{color: '#9b6be8'}}>Already have an account?</Text>
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
        marginBottom: 60,
        marginTop: 30,
    },
    input_container: {
        paddingHorizontal: '5%',        
    },
    text: {
        alignSelf: 'center',
        fontSize: 30,
    }
})

export default RegisterScreen;