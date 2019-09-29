import { useEffect, useState } from 'react'
import API from '../api/API'
import { NavigationContext } from 'react-navigation'
import Axios from 'axios'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

  const getLocation = async () => {
    await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }
  }

  const searchApi = async (searchWord, location) => {
    try {
      const response = await API.get('/search', {
        params: {
          limit: 50,
          term: searchWord,
          latitude: location.latitude,
          longitude: location.longitude
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  const search = async () => {
    const location = await getLocation()
    searchApi('obgyn', location)
  }

  useEffect(() => {
    search();
  }, []);

  return [searchApi, results, errorMessage]
}
