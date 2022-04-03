import axios from 'axios';
import {ContentType} from './enums';

const axiosInstance = axios.create({
  baseURL: 'http://3.23.195.91:82',
  headers: {
    'Content-Type': ContentType.json,
    Accept: ContentType.json,
  },
});

export default axiosInstance;
