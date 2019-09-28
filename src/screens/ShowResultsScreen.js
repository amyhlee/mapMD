import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native'
import API from '../api/API'

const ShowResultsScreen = ({ navigation }) => {
  const [result, setResult ] = useState([])
  const id = navigation.getParam('id')

  const getBusiness = async (id) => {
    try {
      const response = await API.get(`${id}`)
      setResult(response.data);
    } catch (error) {
      console.error(error)
    }
  }

  // const getReviews = async (id) => {
  //   try {
  //     const response = await API.get(`${id}`/reviews)
  //     setResult(response.data);
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(() => {
    getBusiness(id)
  }, [])

  // useEffect(() => {
  //   getReviews(id)
  // }, [])

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        horizontal={true}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />

      <Text style={styles.text}>Phone: {result.display_phone}</Text>
      <Text style={styles.link}
        onPress={() => Linking.openURL(results.url)}>
        Website
      </Text>
      {/* <Text>{{result.location.display_address}}</Text> */}
      {/* <Text>{result.hours}</Text> */}
      <Text style={styles.text}>{result.rating} Stars {"\n"}</Text>
      <Text style={styles.text}>Patient Reviews</Text>
      <Text>{result.review_count} Reviews {"\n"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 200,
    width: 300,
    margin: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
    fontSize: 16
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  }

})

export default ShowResultsScreen
