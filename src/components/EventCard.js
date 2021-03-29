import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

function EventCard({ event }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {event.eventTitle} </Text>
            <Text style={styles.organizer}> {event.eventOrganizer} </Text>
            <Text style={styles.date}> {event.eventDate} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderWidth: 0.5,
    },
    date: {
        fontSize: 16
    },
    organizer: {
        fontSize: 18
    },
    title: {
        fontSize: 22
    }
})

export default EventCard;