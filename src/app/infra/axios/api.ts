import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://api.openweathermap.org',
});

// /data/2.5/weather?lat={lat}&lon={lon}&appid=b88706d5a4d240ea46e5a53314d25aae
