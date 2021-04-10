import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    } from "react-native";
import { Screen, IconButton, AppFormField, AppForm, SubmitButton } from "../../components";
import { auth } from '../../firebase/firebase';

function PasswordScreen({ navigation }) {

    return (
    <Screen style={styles.container}>
      <View>
        <Text style={[styles.title, {marginTop: 30}]}> {auth.currentUser.email}</Text>
        <View style={styles.form}>
            <AppForm
                initialValues={{
                    email: ''
                }}
            >
                <Text style={styles.subtitle}> Current Password</Text>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock" 
                    keyboardType="default"
                    name="password"
                    placeholder="Current Password"  
                    secureTextEntry={true}  
                    textContentType="password"
                />

                <Text style={styles.subtitle}> New Password</Text>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock" 
                    keyboardType="default"
                    name="newPassword"
                    placeholder="New Password"
                    secureTextEntry={true}  
                    textContentType="newPassword"
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
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'bold',
    }
})

export default PasswordScreen; 