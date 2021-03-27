import React, { useEffect, useState } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Alert 
} from 'react-native';

import { Screen, AppButton } from '../components';
import { auth } from '../firebase/firebase';
import { deleteEvent } from '../utils/api_handler';


function EventDetailScreen(props) {

    const [isAuthor, setIsAuthor] = useState(false);
    const event = props.route.params.article;

    useEffect(() => {
        checkForAuthor();
    }, [])

    // If current event document author is the signed in user, edit & delete buttons are shown
    const checkForAuthor = () => {
        if (auth.currentUser.uid === event.author) {
            setIsAuthor(true);
        }
    }

    const deleteAlert = () => {
        Alert.alert(
            "Confirmation",
            "Do you want to delete this event?",
            [
                {
                    text: "OK",
                    onPress: () => handleDelete()
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ]
        )
    }

    const handleDelete = () => {
        deleteEvent(event.id);
        props.navigation.navigate("Schedule");
    }

    return (
        <Screen>
            <Text>Event Details</Text>
            <Text>{event.data.eventTitle}</Text>

            <View style={styles.buttonContainer}>
                <View>
                    {
                        isAuthor ? 
                        <AppButton title="Edit" onPress={() => props.navigation.navigate("Edit Event", {event: event})} /> : 
                        <AppButton name="Attend" onPress={() => console.log("attending event")} /> 
                    }
                </View>
                <View>
                    {
                        isAuthor ? 
                        <AppButton style={styles.delete} title="Delete" onPress={deleteAlert}/> : 
                        <AppButton style={styles.delete} name="Abstain" onPress={() => console.log("Not attending event")} /> 
                    }
                </View>       
            </View>         
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    delete: {
        backgroundColor: 'tomato'
    }
})

export default EventDetailScreen;