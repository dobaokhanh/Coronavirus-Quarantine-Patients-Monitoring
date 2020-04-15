import {API_BASE_URL, ACCESS_TOKEN} from './Constants';

const request = (options) => {
    
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem.ACCESS_TOKEN) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
    }

    

}