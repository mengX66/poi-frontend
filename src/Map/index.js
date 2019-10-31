import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
