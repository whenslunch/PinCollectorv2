import * as axios from 'axios';


const getPinData = async function() {
    const response = await axios.get('https://collections-svc-dn.azurewebsites.net/api/GetAllItems');
    return response.data;
};

export const dataprovider = {
    getPinData,
};