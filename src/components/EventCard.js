import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';

function EventCard({ event }) {

    const date = new Date(event.eventDate).toLocaleDateString();

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {event.eventTitle} </Text>
            <Text style={styles.organizer}> {event.eventOrganizer} </Text>
            <Text style={styles.date}> {date} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderWidth: 0.5,
        borderRadius: 5,
    },
    date: {
        fontSize: 15,
    },
    organizer: {
        fontSize: 16,
        fontStyle: 'italic',
        textTransform: 'capitalize',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    }
})

export default EventCard;