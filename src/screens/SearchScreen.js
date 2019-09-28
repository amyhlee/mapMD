import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import SearchList from '../components/searchList'


const SearchScreen = () => {
  //term, what we are going to search api with
  //get that value from useState
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByTitle = (alias) => {
    return results.filter(result => {
      return result.alias.includes(alias)
    })
  }

  console.log(results)

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <SearchList
          results={filterResultsByTitle('obgyn')}
          header="OB/ GYN"
        />
        <SearchList
          results={filterResultsByTitle('fertility')}
          header="Fertility"
        />
        <SearchList
          results={filterResultsByTitle('pharmacy')}
          header="Pharmacies"
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen;
