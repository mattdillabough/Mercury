import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Screen, EventCard } from '../components';
import { getRecentEvents, getNextRecentEvents } from '../utils/api_handler';
import { storeJsonData, getJsonData } from '../utils/cache_handler';

// Flatlist of upcoming events
// When event clicked, navigate to EventDetailScreen

function ScheduleScreen(props) {

    const [events, setEvents] = useState([]);
    const [refresh, setRefresh] = useState(true);

    // Saving last document retrieved from getRecentEvents, used for pagination in fetching next batch when reaching end of flatlist
    const [lastDocument, setLastDocument] = useState({});

    useEffect(() => {
        fetchEvents();
    },[])

    // Fetch events from cache if available
    // Fetch events from firestore db if it isn't in cache
    const fetchEvents = async() => {

        if(getJsonData('@events') !== null){
            await getJsonData('@events').then(data => {
                setEvents(data);
                setRefresh(false);

                const last_doc = data[data.length - 1];
                setLastDocument(last_doc);
            }).catch(() => setRefresh(false))
        }
        else {
            await getUpdates();
        }
    }

    const getUpdates = async() => {
        
        await getRecentEvents().then(data => {
            setEvents(data);
            setRefresh(false);
            storeJsonData('@events', data);

            const last_doc = data[data.length - 1];
            setLastDocument(last_doc);

        }).catch(() => setRefresh(false))
    }

    const handleLoadMore = async() => {
        const data = await getNextRecentEvents(lastDocument);
        setEvents(events => events.concat(data));
    }

    // For user refreshing the flatist, it will fetch newest updates
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
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0}
            />
        </Screen>
    );
}

export default ScheduleScreen;