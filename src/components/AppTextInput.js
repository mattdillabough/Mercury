import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//import colors from '../config/colors';
//import defaultStyles from '../config/styles';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={"#6e6969"} style={styles.icon} />}
            <TextInput style={styles.text} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: "#f8f4f4",
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