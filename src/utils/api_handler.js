const axios = require('axios');
import { getToken } from '../firebase/firebase';

const url = "http://192.168.1.13:5000";

export const grantDefaultRole = async() => {
    /*
    Call backend to assign a role to user if they're mapped to one
    */

    const token = await getToken();
    const url_endpoint = url + "/grantRole";
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  
    // Axios is used instead of fetch as it gave me weird results
    axios.get(url_endpoint, {headers: headers}).then(response => response.data);
    return;
}

export const addEvent = async(data) => {
    /*
    Pass new event data to backend in order to create for firestore
    */

    const token = await getToken();
    const url_endpoint = url + "/addEvent";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    axios.post(url_endpoint, {data: data}, {headers: headers})
    .catch(error => console.error(error.message))
    return;
}


export const getRecentEvents = async() => {
    const token = await getToken();
    const url_endpoint = url + "/getRecentEvents";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    let data = await axios.get(url_endpoint, {headers: headers}).then(response => response.data);
    return data;
}


export const getNextRecentEvents = async(last_doc) => {

    const token = await getToken();
    const url_endpoint = url + "/getNextEventPage";
    
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token,
        'ID': last_doc.id
    }

    let data = axios.get(url_endpoint, {headers: headers}).then(response => response.data)
    .catch(error => console.error(error.message));

    return data;
}


export const deleteEvent = async(event_id) => {
    
    const token = await getToken();
    const url_endpoint = url + "/deleteEvent";

    const headers = {
        'Authorization': token
    }

    axios.delete(url_endpoint, {data: { id: event_id }}, {headers: headers})
    .catch(error => console.error(error.message));
    
    return;
}


export const editEvent = async(data) => {

    const token = await getToken();
    const url_endpoint = url + "/editEvent";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }
    
    axios.post(url_endpoint, {data: data}, {headers: headers})
    .catch(error => console.error(error.message))
    return;
}


export const createRole = async(data) => {
    const token = await getToken();
    const url_endpoint = url + '/createRole';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    axios.post(url_endpoint, {data: data}, {headers: headers})
    .catch(error => console.error(error.message))
}
