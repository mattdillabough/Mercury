import React from 'react';
import { useFormikContext } from 'formik';
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Platform 
} from 'react-native';

import IconButton from './IconButton';
import ErrorMessage from './ErrorMessage';

function EditFormField( { name, style, icon, onPress,...otherProps } ) {
    const {setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <View style={[styles.container, style]}>
                <TextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)}
                    style={styles.text}
                    {...otherProps}
                />
                <IconButton name={icon} style={styles.icon} onPress={onPress}/>
            </View>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        marginVertical: 13,
        borderBottomWidth: .2,
        justifyContent: 'space-between'
    },
    icon: {
        marginLeft: 10
    },
    text: {
        color: "#0c0c0c",
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})


export default EditFormField;