import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    } from "react-native";
import { Screen, IconButton, AppFormField, AppForm, SubmitButton } from "../../components";
import { auth } from '../../firebase/firebase';

function PhoneNumberScreen({ navigation }) {

    return (
    <Screen style={styles.container}>
      <View>
        <Text style={[styles.title, {marginTop: 38}]}> {auth.currentUser.email}</Text>
        <View style={styles.form}>
            <AppForm
                initialValues={{
                    email: ''
                }}
            >
                <Text style={styles.subtitle}> New Phone Number</Text>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    // icon="lock" 
                    keyboardType="default"
                    name="newTelephoneNumber"
                    placeholder="New Phone Number"
                    secureTextEntry={true}  
                    textContentType="telephoneNumber"
                />
            </AppForm>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
    },
    form: {
        marginLeft: 40,
        marginRight: 40,
        paddingTop: 50,
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'bold',
    }
})

export default PhoneNumberScreen; 