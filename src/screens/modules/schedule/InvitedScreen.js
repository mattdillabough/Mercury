import React,{ useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Screen, AppButton } from '../../../components';
import { getEventById } from '../../../utils/api_handler/events';
import { createEventForCalendar } from '../../../utils/calendar';
import colors from '../../../config/colors';

function InvitedScreen(props) {

    const [event, setEvent] = useState({});
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(true);
    const event_id = props.route.params.eventId;

    useEffect(() => {
        getInviteEvent();
    },[]);


    const getInviteEvent = async() => {
        let data = await getEventById(event_id).catch(error => console.error(error.message));
        setEvent(data);

        let date = new Date(data.data.eventDate).toLocaleDateString();
        setDate(date);
        setLoading(false);
    };


    const onAttend = async() => {
        const title = event.data.eventTitle;
        const event_date = event.data.eventDate;
        const description = event.data.eventDescription;

        await createEventForCalendar(title, event_date, description);
    }



    return (
        <Screen style={styles.container}>
        {loading ?
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.load}>Loading...</Text>
            </View>
            
            :
            <>
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
                    <AppButton 
                        title="Attend" 
                        onPress={() => onAttend()} 
                    />       
                </View>
                <View>      
                    <AppButton 
                        style={styles.delete} 
                        title="Absence" 
                        onPress={() => console.log("Not attending event")} 
                    />                    
                </View> 
                <View>
                    <AppButton
                        style={styles.close}
                        title="Close"
                        onPress={() => props.navigation.navigate("Applications")}
                    />
                </View>      
            </View>
            </>
        }     
        </Screen>
    );
}

const styles = StyleSheet.create({
    
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    close: {
        backgroundColor: colors.blue
    },
    container: {
        justifyContent: 'space-between'
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
    eventContainer: {
        marginHorizontal: '5%',
        marginTop: 30
    },
    load: {
        textAlign: 'center',
        textAlignVertical: 'center',
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

export default InvitedScreen;