import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, View, TextInput } from 'react-native';

import ErrorMessage from './ErrorMessage';

function AppFormBox({ name, ...otherProps }) {
    const {setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.text} 
                multiline={true} 
                textAlignVertical="top" 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps} 
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
        marginVertical: 13,
        width: "100%",
        paddingBottom: 250
    },
    text: {
        color: "#0c0c0c",
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",    
    }
})

export default AppFormBox;