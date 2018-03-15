import axios from 'axios';

const API_Key = '5b7aeebca4ea41b9eba15defb86b618b';
const RootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_Key}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {

    const url = `${RootURL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    }
}