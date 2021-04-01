import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker'; 
import { Text, View, Alert, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { Screen, AppFormField, AppForm, SubmitButton } from '../../components';
import { auth } from '../../firebase/firebase';
import { createRole } from '../../utils/api_handler';


const validationSchema = Yup.object().shape({
    roleName: Yup.string()
        .required()
        .label("Role name")
})

function PermissionScreen({ navigation }) {

    const [isAuthor, setIsAuthor] = useState(false);
    const [selected, setSelected] = useState(1);

    useEffect(() => {
        checkForAuthor();
    })

    const checkForAuthor = () => {
        auth.currentUser.getIdTokenResult(true)
        .then((idTokenResult) => {
            if(!!idTokenResult.claims.admin){
                // permit access to permissions
                setIsAuthor(true);
            } else {
                // deny access to permissions
                showAlert();
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }


    const showAlert = () => {
        Alert.alert(
            "Permission denied",
            "Access not granted due to current role",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate("Setting")
                }
            ]
        )
    }

    const handleSubmit = (values) => {
        values["level"] = selected;
        createRole(values);
        alert("Role created")
    }

    return (
        <Screen style={styles.container}>
            <View>
                <Text style={styles.title}>Create Role</Text>
                <View style={styles.form}>
                <AppForm
                    initialValues={{
                        roleName: ''
                    }}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={validationSchema}
                >
                    <Text style={styles.subtitle}>Role Name</Text>
                    <AppFormField
                        name="roleName"
                        placeholder="Role name"
                    />

                    <Text style={styles.subtitle}>Level Access</Text>
                    <Picker
                        selectedValue={selected}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelected(itemValue)
                        }>
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                    </Picker>

                    <SubmitButton title="Create" />
                </AppForm>
                
                    
                     
                </View>          
            </View>
            
            <Text style={[styles.title, {marginTop: 10}]}>Assign Role</Text>
            <View/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'space-between',
        paddingTop: 15,
    },
    form: {
        marginLeft: 10,
        marginRight: 15,
        paddingTop: 15,
    },
    title: {
        fontSize: 22,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontWeight: 'bold',
    }
})

export default PermissionScreen;