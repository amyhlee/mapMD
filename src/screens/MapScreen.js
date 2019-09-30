import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const MapScreen = () => {

  const [error, setError] = useState(null)
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null
  })


  const startWatching = async () => {
    try {
      await Location.requestPermissionsAsync()

    } catch (error) {
      setError(error)
    }
  }

  const getLocation = async () => {
    await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  }

  useEffect(() => {
    startWatching();
    getLocation();
  }, [])

  return location.latitude ?
    <MapView
    style={styles.map}
    initialRegion={{
      ...location,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
    /> : null

}



const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default MapScreen
