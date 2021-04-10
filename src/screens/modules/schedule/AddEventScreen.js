import React from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    View 
} from 'react-native';
import * as Yup from 'yup';

import { 
    Screen, 
    AppForm,
    AppFormField,
    AppFormBox,
    KeyboardView,
    SubmitButton
} from '../../../components';
import { addEvent } from '../../../utils/api_handler/events';

const validationSchema = Yup.object().shape({
    eventTitle: Yup.string()
        .required()
        .label("Event Title"),
    eventOrganizer: Yup.string()
        .required()
        .label("Event Organizer"),
    eventDate: Yup.date()
        .required()
        .label("Event Date"),
    eventDescription: Yup.string()
        .required()
        .label("Event Description")
})

function AddEventScreen({ navigation }) {

    async function handleSubmit(values) {
        await addEvent(values);
        navigation.navigate('Schedule');
    }

    return (
        <Screen>
        <KeyboardView>
            <ScrollView>
                <AppForm 
                initialValues={{
                    eventTitle: '',
                    eventOrganizer: '',
                    eventDate: '',
                    eventDescription: ''
                }}
                onSubmit={values => handleSubmit(values)}
                validationSchema={validationSchema} 
                >
                    <View style={styles.input_Container}>
                        <AppFormField
                            name="eventTitle"
                            placeholder="Event Title"
                        />
                        <AppFormField
                            name="eventOrganizer"
                            placeholder="Event Organizer"
                        />
                        <AppFormField
                            name="eventDate"
                            placeholder="Event Date"
                        />
                        <AppFormBox
                            name="eventDescription"
                            blurOnSubmit={false}
                            placeholder="Event Description"
                        />
                        <SubmitButton title="Submit" />
                    </View>
                </AppForm>
            </ScrollView>
            </KeyboardView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    input_Container: {
        paddingHorizontal: '5%',
    }
})

export default AddEventScreen;