import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Header extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>Find Doc</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB6C1',
    paddingTop: 14,
    alignItems: 'center',
    borderBottomWidth: 2
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
  }
})
