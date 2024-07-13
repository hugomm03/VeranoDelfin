import axios from 'axios'
import { IPAdress } from './WIFI';

const base = 'http://';
const medio = IPAdress;
const fin = ':5000/';

URLCOMPLETA = base + medio + fin;

export const instance = axios.create({
    baseURL: 'http://192.168.0.107:5000/'
  });
  