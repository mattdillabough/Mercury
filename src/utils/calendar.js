import * as Calendar from 'expo-calendar';
import { Platform } from 'react-native';

import { storeData, getData } from './cache_handler';


async function getCalendarPermissions(){

    // Check if calendar permission was previously granted
    let past_permission = await Calendar.getCalendarPermissionsAsync();
    if(past_permission.granted === true){return past_permission;}

    // Ask user for permission if 1st time or never granted
    let permission = await Calendar.requestCalendarPermissionsAsync()
    return permission;
}


async function onIosEvent(title, date, description){
    let calendar = await Calendar.getDefaultCalendarAsync();

    const event_date = new Date(date);

    let details = {
        title: title,
        startDate: event_date,
        endDate: event_date,
        allDay: true,
        notes: description,
    }

    let event_id = await Calendar.createEventAsync(calendar.id, details);
    console.log("event added")
}


async function onAndroidEvent(title, date, description){

    const event_date = new Date(date);
    const event_details = {
        title: title,
        startDate: event_date,
        endDate: event_date,
        allDay: true,
        notes: description,
        guestCanModify: false,
    }

    // Search local storage for calendar id
    const calendarId = await getData('calendarId');
    if(calendarId){
        await Calendar.createEventAsync(calendarId, event_details);
    }

    // Create a new calendar if it doesn't exist in local storage

    const calendar_details = {
        details: {
            title: "Mercury",
            color: "",
            source: {
                name: Calendar.CalendarAccessLevel.OWNER.source.name,
            },
            name: "Mercury",
            ownerAccount: Calendar.CalendarAccessLevel.OWNER.ownerAccount,
        }
    }

    let calendar = await Calendar.createCalendarAsync(calendar_details);
    
    // create event onto the calendar
    await Calendar.createEventAsync(calendar, event_details);

    // save calendar id onto local storage          
    await storeData('calendarId', calendar);
}


export async function createEventForCalendar(title, date, description){
    let calendar_permission = await getCalendarPermissions();
    if(calendar_permission.granted === false){return}

    if(Platform.OS === 'ios'){
        await onIosEvent(title, date, description);
    }
    else{
        await onAndroidEvent(title, date, description);
    }
}

