const axios = require('axios');
import { getToken } from '../../firebase/firebase';
import { url } from './api_settings';

export const addImage = async(data) => {

    const token = await getToken();
    const url_endpoint = url + "/addProfileImg";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    axios.post(url_endpoint, {data: data}, {headers: headers})
    .catch(error => console.error(error.message))
    return;
}

export const getProfileImg = async() => {
    const token = await getToken();
    const url_endpoint = url + "/getImage";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    let data = await axios.get(url_endpoint, {headers: headers}).then(response => response.data);
    return data;
}