// import React, { Component } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import * as Location from 'expo-location';
// import * as Permissions from 'expo-permissions';

// export default class App extends Component {
//   state = {
//     location: null,
//     errorMessage: null,
//   };

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//       this.setState({
//         errorMessage: 'Permission to access location was denied',
//       });
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     this.setState({ location });
//   };

//   render() {
//     let text = 'Waiting..';
//     if (this.state.errorMessage) {
//       text = this.state.errorMessage;
//     } else if (this.state.location) {
//       text = JSON.stringify(this.state.location);
//     }

//     return (
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>{text}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });




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

  console.log(location)

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
