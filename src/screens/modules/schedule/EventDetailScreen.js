import React, { useEffect, useState } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Alert 
} from 'react-native';

import { Screen, AppButton } from '../../../components';
import { auth } from '../../../firebase/firebase';
import { deleteEvent } from '../../../utils/api_handler/events';
import colors from '../../../config/colors';


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
        <Screen style={styles.container}>

            <View style={styles.eventContainer}>
                <Text style={styles.title}>
                    {event.data.eventTitle}
                </Text>

                <Text style={styles.organizer}>
                    {event.data.eventOrganizer}
                </Text>

                <Text style={styles.date}>
                    {event.data.eventDate}
                </Text>

                <Text style={styles.description}>
                    {event.data.eventDescription}
                </Text>
            </View>
            



            <View style={styles.buttonContainer}>
                <View>
                    {
                        isAuthor ? 
                        <AppButton 
                            style={styles.edit} 
                            title="Edit" 
                            onPress={() => props.navigation.navigate("Edit Event", {event: event})} 
                        /> 
                        : 
                        <AppButton 
                            name="Attend" 
                            onPress={() => console.log("attending event")} 
                        /> 
                    }
                </View>
                <View>
                    {
                        isAuthor ? 
                        <AppButton 
                            style={styles.delete} 
                            title="Delete" 
                            onPress={deleteAlert}
                        /> 
                        : 
                        <AppButton 
                            style={styles.delete} 
                            name="Abstain" 
                            onPress={() => console.log("Not attending event")} 
                        /> 
                    }
                </View>       
            </View>         
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    eventContainer: {
        marginHorizontal: '5%',
    },
    date: {
        fontSize: 15,
        paddingTop: 5,
    },
    delete: {
        backgroundColor: colors.delete,
    },
    description: {
        fontSize: 16,
        paddingTop: 20
    },
    edit: {
        backgroundColor: colors.blue
    },
    title : {
        fontSize: 34,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    organizer: {
        fontSize: 19,
        fontStyle: 'italic',
        textTransform: 'capitalize'
    }
})

export default EventDetailScreen;