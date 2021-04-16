import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';
import RadioButtonRN from 'radio-buttons-react-native-expo';

function AppFormChoice({data, box, name, selectedBtn}) {
    return (
        <>
            <RadioButtonRN
                box={box}
                data={data}
                selectedBtn={selectedBtn}
                style={styles.container}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingTop: 20,
    }
})

export default AppFormChoice;