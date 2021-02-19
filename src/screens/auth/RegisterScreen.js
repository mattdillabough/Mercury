import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Screen, AppButton, AppTextInput, ErrorMessage } from '../../components';
import { set } from 'react-native-reanimated';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Confirm Password must match Password').required('Confirm Password is required')
});


function RegisterScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
            
            <Formik
                initialValues={{ 
                    email: '', 
                    password: '',
                    confirmPassword: ''
                    }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>

                <View style={{paddingBottom: 140}}>
                    <Text style={styles.text} >Register Screen</Text>
                </View>

                <View style={styles.input_container}>
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        onBlur={() => setFieldTouched("email")}
                        onChangeText={handleChange("email")}
                        name="email"
                        placeholder="Email Address"  
                        textContentType="emailAddress" 
                    />
                    <ErrorMessage error={errors.email} visible={touched.email} />
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock" 
                        onBlur={() => setFieldTouched("password")}
                        onChangeText={handleChange("password")}
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <ErrorMessage error={errors.password} visible={touched.password} />
                    <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        onBlur={() => setFieldTouched("confirmPassword")}
                        onChangeText={handleChange("confirmPassword")} 
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <ErrorMessage error={errors.confirmPassword} visible={touched.confirmPassword} />
                </View>
     
                <View style={styles.button_container} >
                    <AppButton title="Register" onPress={handleSubmit} />
                </View>

                </>
                )}
            </Formik>
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