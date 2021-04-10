import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';

import { 
    Screen,
    AppForm,
    AppFormField,
    SubmitButton,
    ErrorMessage,
} from '../../components';
import { passwordReset } from '../../firebase/firebase';
import colors from '../../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email")
});

function RecoverScreen({ navigation }) {

    const [submitError, setSubmitError] = useState(''); 

    async function handleOnSubmit(values) {
        const { email } = values;

        try {
            await passwordReset(email);

            Alert.alert(
                "Password Reset email sent",
                "",
                [
                    {
                        text: "OK", onPress: () => navigation.navigate("Login")
                    }
                ],
                { cancelable: false }
            );
        } catch (error) {
            setSubmitError(error.message);
        }
    }



    return (
        <Screen style={styles.container}>
            <View/>
            <View>
                <Text style={styles.title}>Reset Password</Text>
            </View>
            <View>
                <AppForm
                    initialValues={{
                        email: ''
                    }}
                    onSubmit={values => handleOnSubmit(values)}
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
                        <SubmitButton title="Submit" />
                        <ErrorMessage error={submitError} visible={true} />
                    </View>

                </AppForm>           
            </View>
            <View/>
            <TouchableOpacity style={styles.backButton} onPress={ () => navigation.navigate("Login") }>
                <Ionicons name="arrow-back-circle-sharp" size={40} color={colors.defaultButton} />
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    input_container: {
        paddingHorizontal: '5%',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26
    },
    backButton: {
        alignSelf: "flex-start",
        margin: 15
    }
})

export default RecoverScreen;