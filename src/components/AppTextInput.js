import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function AppTextInput({icon, style, ...otherProps}) {
    return (
        <View style={[styles.container, style]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={"#6e6969"} style={styles.icon} />}
            <TextInput style={styles.text} {...otherProps} />
        </View>
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
    },
    icon: {
        marginRight: 10,
    },
    text: {
        color: "#0c0c0c",
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppTextInput;