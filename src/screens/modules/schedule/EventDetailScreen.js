import React, { useEffect, useState, useLayoutEffect } from 'react';
import { 
    Text, 
    StyleSheet, 
    View, 
    Alert, 
    TouchableOpacity
} from 'react-native';

import { Screen, AppButton } from '../../../components';
import { auth } from '../../../firebase/firebase';
import { deleteEvent } from '../../../utils/api_handler/events';
import { createEventForCalendar } from '../../../utils/calendar';
import colors from '../../../config/colors';


function EventDetailScreen(props) {

    const [isAuthor, setIsAuthor] = useState(false);
    const event = props.route.params.article;
    let date = new Date(event.data.eventDate).toLocaleDateString();

    useEffect(() => {
        checkForAuthor();
    }, [])

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return(
                    <TouchableOpacity style={{marginRight: 15}} onPress={() => props.navigation.navigate('Event Invite', {eventId: event.id})}>
                        <Text style={{fontSize: 18, color: colors.blue}}>Invite</Text>
                    </TouchableOpacity>
                )
            }
        })
    })

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

    const onAttend = async() => {
        const title = event.data.eventTitle;
        const event_date = event.data.eventDate;
        const description = event.data.eventDescription;

        await createEventForCalendar(title, event_date, description);
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
                    {date}
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
                            title="Attend" 
                            onPress={() => {
                                onAttend();
                                alert("Event added to calendar")
                            }} 
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
                            title="Absence" 
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