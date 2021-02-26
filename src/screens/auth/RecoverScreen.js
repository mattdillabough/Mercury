import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Yup from 'yup';

import { 
    Screen, 
    KeyboardView, 
    AppForm,
    AppFormField,
    SubmitButton,
    ErrorMessage
} from '../../components';
import { passwordReset } from '../../firebase/firebase';

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
                "Alert title",
                "Password Reset email sent",
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
        <Screen>
            <KeyboardView style={styles.container}>
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
                
            </KeyboardView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input_container: {
        paddingHorizontal: '5%',
    },
    title: {
        alignSelf: 'center',
        position: 'absolute',
        top: 60,
    },
    text: {
        fontSize: 30,
    }
})

export default RecoverScreen;