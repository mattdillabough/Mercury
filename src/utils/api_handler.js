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

    axios.post(url_endpoint, {data: data}, { headers: headers})
    .catch(error => console.error(error))
}


export const getAllEvents = async() => {
    const token = await getToken();
    const url_endpoint = url + "/getAllEvents";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    let data = await axios.get(url_endpoint, {headers: headers}).then(response => response.data);
    return data;
}

