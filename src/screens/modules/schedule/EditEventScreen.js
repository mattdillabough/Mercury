import React, { useState } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    View, 
    Text 
} from 'react-native';
import * as Yup from 'yup';

import { 
    Screen, 
    AppForm,
    EditFormField,
    AppFormBox,
    KeyboardView,
    SubmitButton,
    IconButton
} from '../../../components';
import { editEvent } from '../../../utils/api_handler/events';

const validationSchema = Yup.object().shape({
    eventTitle: Yup.string(),
    eventOrganizer: Yup.string(),
    eventDate: Yup.date(),
    eventDescription: Yup.string(),
})

function EditEventScreen(props) {

    const [editTitle, setEditTitle] = useState(false);
    const [editOrganizer, setEditOrganizer] = useState(false);
    const [editDate, setEditDate] = useState(false);
    const [editDescription, setEditDescription] = useState(false);

    const event = props.route.params.event;
    const id = event.id;
    const title = event.data.eventTitle;
    const organizer = event.data.eventOrganizer;
    const date = event.data.eventDate;
    const description = event.data.eventDescription;

    async function handleSubmit(values) {
        values["id"] = id;
        await editEvent(values);
        props.navigation.navigate("Event")
    }

    return (
        <Screen>
            <KeyboardView>
                <ScrollView>
                    <AppForm
                        initialValues={{
                            eventTitle: title,
                            eventOrganizer: organizer,
                            eventDate: date,
                            eventDescription: description
                        }}
                        onSubmit={values => handleSubmit(values)}
                        validationSchema={validationSchema}
                        >
                        <View style={styles.container}>
                            <Text>Event Title</Text>
                            <EditFormField
                                editable={editTitle}
                                icon="create-sharp"
                                name="eventTitle"
                                onPress={() => setEditTitle(true)}
                                placeholder={title}
                                style={styles.formField}                              
                            />
                            <Text>Event Organizer</Text>
                            <EditFormField
                                editable={editOrganizer}
                                icon="create-sharp"
                                name="eventOrganizer"
                                onPress={() => setEditOrganizer(true)}
                                placeholder={organizer}
                                style={styles.formField}
                            />
                            <Text>Event Date</Text>
                            <EditFormField
                                editable={editDate}
                                icon="create-sharp"
                                name="eventDate"
                                onPress={() => setEditDate(true)}
                                placeholder={date}
                                style={styles.formField}
                            />
                            <View style={styles.formBoxEdit}>
                                <Text>Event Description</Text>
                                <IconButton name="create-sharp" onPress={() => setEditDescription(true)}/>
                            </View>                       
                            <AppFormBox
                                editable={editDescription}
                                name="eventDescription"
                                blurOnSubmit={false}
                                placeholder={description}
                                style={styles.formField}
                            />
                            <SubmitButton title="Save changes"/>
                        </View>
                    </AppForm>
                </ScrollView>
            </KeyboardView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '5%'
    },
    formField: {
        padding: 1
    },
    formBoxEdit: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default EditEventScreen;