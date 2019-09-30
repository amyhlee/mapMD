import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
  return (
    <>
    <View style={styles.container}>
     <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : {uri: 'https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2015/08/shutterstock_285799286-750x522.jpg'}} />
    </View>
    <View>
     <Text style={styles.name}>{result.name}</Text>
    </View>
    <View>
     <Text>{result.rating} Stars {result.review_count} Reviews</Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default ResultsDetail
