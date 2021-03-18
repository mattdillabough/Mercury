import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Screen, EventCard } from '../components';
import { getAllEvents } from '../utils/api_handler';
import { storeJsonData, getJsonData } from '../utils/cache_handler';

// Flatlist of upcoming events
// When event clicked, navigate to EventDetailScreen

function ScheduleScreen(props) {

    const [events, setEvents] = useState([]);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        fetchEvents();
    },[])

    const fetchEvents = async() => {

        if(getJsonData('@events') !== null){
            await getJsonData('@events').then(data => {
                setEvents(data);
                setRefresh(false);
            }).catch(() => setRefresh(false))
        }
        else {
            await getUpdates();
        }
    }

    const getUpdates = async() => {
        
        await getAllEvents().then(data => {
            setEvents(data);
            setRefresh(false);
            storeJsonData('@events', data)
        }).catch(() => setRefresh(false))
    }

    const handleRefresh = async() => {
        setRefresh(true); 
        getUpdates();
    }

    return (
        <Screen>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <EventCard event={item.data} />
                )}
                keyExtractor={item => item.id}
                refreshing={refresh}
                onRefresh={handleRefresh}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ScheduleScreen;