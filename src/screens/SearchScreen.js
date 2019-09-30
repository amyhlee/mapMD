import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import SearchList from '../components/searchList'
import { Header } from 'react-native-elements'

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()

  return (
    <>
    <View style={styles.container}>
      <Header
      centerComponent={{text: "Map MD", style: {fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}}
      containerStyle={{
        height: 75,
        backgroundColor: '#FFB6C1',
        marginBottom: 15
      }}
      />
    </View>
    <ScrollView style={styles.list}>
        <SearchList
          results={results}
          header="OB/ GYN currently near you"
        />
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    alignContent: 'center'
  },
  list: {
    alignContent: 'center'
  }
})

export default SearchScreen;
