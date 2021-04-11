const axios = require('axios');
import { getToken } from '../../firebase/firebase';
import { url } from './api_settings';


export const assignRole = async(data) => {
    const token = await getToken();
    const url_endpoint = url + '/assignRole';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    axios.post(url_endpoint, {data: data}, {headers: headers})
        .catch(error => console.error(error.message))

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


export const getAllRoles = async() => {
    const token = await getToken();
    const url_endpoint = url + '/getAllRoles';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    let data = axios.get(url_endpoint, {headers: headers})
        .then(response => response.data)
        .catch(error => console.error(error.message));

    return data;
}


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
    axios.get(url_endpoint, {headers: headers})
        .then(response => response.data)
        .catch(error => console.error(error.message));
    return;
}


export const inviteRoleGroup = async(data) => {
    const token = await getToken();
    const url_endpoint = url + "/inviteRole";

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    axios
        .post(url_endpoint, {data: data} ,{headers: headers})
        .catch((error) => console.error(error.message));
}

export const revokeRole = async (data) => {
    const token = await getToken();
    const url_endpoint = url + "/revokeRole";
  
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
    };
  
    axios
      .post(url_endpoint, { data: data }, { headers: headers })
      .then(response => console.log(response.data))
      .catch((error) => console.error(error.message));
  };
