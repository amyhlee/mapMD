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
    <View>
      <Header
      placement="center"
      centerComponent={{text: "Find Doc"}
      />
      <ScrollView>
        <SearchList
          results={results}
          header="OB/ GYN"
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen;
